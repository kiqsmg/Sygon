import {
    useGlobalState,
    setGlobalState,
    setLoadingMsg,
    setAlert,
  } from '../store'
  import { useState } from 'react'
  import { FaTimes } from 'react-icons/fa'
  import { create } from 'ipfs-http-client'
  import { mintNFT } from '../Blockchain.Services'
  