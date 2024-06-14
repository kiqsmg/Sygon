// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// Base ERC721 implementation is a set of rules and functionalities, the contract inherits the base ERC721 functionality ---> defines standard interface fot NFT on the ethereum blockchain
import "./ERC721.sol";
// Extension of ERC721 to include enumerability of all token ids in the contract
import "./ERC721Enumerable.sol";
// Provides basic authorization control functions
import "@openzeppelin/contracts/access/Ownable.sol";

contract TimelessNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;
    // A mapping to check if a metadata URI has been used
    mapping(string => uint8) existingURIs;
    // A mapping to track the owner of each NFT by its ID
    mapping(uint256 => address) public holderOf;

    // The address of the artist receiving royalties
    address public artist;
    // The percentage of each transaction that goes to the artist as a royalty
    uint256 public royalityFee;
    // Total supply of minted NFTs
    uint256 public supply = 0;
    // Total number of transactions
    uint256 public totalTx = 0;
    // Cost to mint a new NFT
    uint256 public cost = 0.01 ether;

    // Sale event ---> declares an event to log info in the blockchain (record details about each sale and make it accessible)
    event Sale(
        uint256 id,
        address indexed owner,
        uint256 cost,
        string metadataURI,
        uint256 timestamp
    );

    // Solidity 'struct' used to organize and store info about NFT minting and buying transactions within the contract--> used to
    struct TransactionStruct {
        uint256 id;
        address owner;
        uint256 cost;
        string title;
        string description;
        string metadataURI;
        uint256 timestamp;
    }

    TransactionStruct[] transactions;
    TransactionStruct[] minted;

    //Special function executed only once when the contract is deployed. It initializes the contracts state and sets up essential parameters
    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _royalityFee,
        address _artist
    ) ERC721(_name, _symbol) {
        royalityFee = _royalityFee;
        artist = _artist;
    }

    // Function enables a user to MINT a new NFT  START --> Validates that the user has sent enough Ether--> Ensures the metadata URI is unique--> Calculate and distributes royalty fees--> 
    //--> Increments the total supply count--> Records the miting transaction details--> Emits a sale event for logging purposes--> Mints the NFT, updates the 'existingURIs' mapping and records the NFT owner
    function payToMint(
        string memory title,
        string memory description,
        string memory metadataURI,
        uint256 salesPrice
    ) external payable {
        require(msg.value >= cost, "Ether too low for minting!");
        require(existingURIs[metadataURI] == 0, "This NFT is already minted!");
        

        uint256 royality = (msg.value * royalityFee) / 100;
        payTo(artist, royality);
        payTo(owner(), (msg.value - royality));

        supply++;

        minted.push(
            TransactionStruct(
                supply,
                msg.sender,
                salesPrice,
                title,
                description,
                metadataURI,
                block.timestamp
            )
        );

        emit Sale(
            supply,
            msg.sender,
            msg.value,
            metadataURI,
            block.timestamp
        );

        _safeMint(msg.sender, supply);
        existingURIs[metadataURI] = 1;
        holderOf[supply] = msg.sender;
    }

    //This function ensures that the purchase process is secure, that payments are correctly distributed, and that ownership of the NFT is properly transferred on the blockechain. START--> Validate that buyer has sent enough Ether-->
    //--> Ensure that buyer is not current owner of the NFT--> Calculates and distributes royalty fees to the artist and the current owner--> Records the transaction details in the 'transactions' array--> 
    //--> Emits a 'Sale' event to log the purchase--> Transfers ownership of the NFT to buyer by updating the owner's address in the 'minted' array
    function payToBuy(uint256 id) external payable {
        require(msg.value >= minted[id - 1].cost, "Ether too low for purchase!");
        require(msg.sender != minted[id - 1].owner, "Operation Not Allowed!");

        uint256 royality = (msg.value * royalityFee) / 100;
        payTo(artist, royality);
        payTo(minted[id - 1].owner, (msg.value - royality));

        totalTx++;

        transactions.push(
            TransactionStruct(
                totalTx,
                msg.sender,
                msg.value,
                minted[id - 1].title,
                minted[id - 1].description,
                minted[id - 1].metadataURI,
                block.timestamp
            )
        );

        emit Sale(
            totalTx,
            msg.sender,
            msg.value,
            minted[id - 1].metadataURI,
            block.timestamp
        );

        minted[id - 1].owner = msg.sender;
    }

    // Function allows the owner of an NFT to update its sale price. START--> Validate that the new price is greater than 0 Ether--> Ensure that the caller of the function is the current owner of the NFT--> 
    //--> Update the cost attribute of the specified NFT with new price--> Returns 'true' to indicate that the price change operation was successful
    function changePrice(uint256 id, uint256 newPrice) external returns (bool) {
        require(newPrice > 0 ether, "Ether too low!");
        require(msg.sender == minted[id - 1].owner, "Operation Not Allowed!");

        minted[id - 1].cost = newPrice;
        return true;
    }

    //Utility funtion used internally in your smart contract to send Ether 'amount' to a specified address 'to'. Manage financial transactions within the contract, ensuring security and correctness in Ether transfers.
    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }

    // Function servers as a read-only method to retrieve an array of 'TransactionStruct' objects, each representing metadata and details of a minted NFT. It facilitates transparency and accessibility of NFT data.
    function getAllNFTs() external view returns (TransactionStruct[] memory) {
        return minted;
    }

    //Function allows external callers to fetch and retrieve the complete details of a specific NFT from the 'minted' rray based on its 'id'.
    function getNFT(uint256 id) external view returns (TransactionStruct memory) {
        return minted[id - 1];
    }

    //Read-only function of recorded transactions within the contract
    function getAllTransactions() external view returns (TransactionStruct[] memory) {
        return transactions;
    }
}