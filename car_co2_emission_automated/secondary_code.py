# This code will be responsible for reading the Drivers_with_CO2.csv file and processing the data to then calculate the correct amount
#  of carbon credits each driver should buy to compensate for their emissions, as well as the overall amount the company should purchase
#  per month to obtain an 'All Emissions Compensated' stamp.

import pandas as pd

# Load the drivers and car consumption data
drivers = pd.read_csv('./Drivers_with_CO2.csv')

# Calculate the total CO2 emissions for the company
total_carbon = drivers['co2_emission'].sum()

total_price = total_carbon*60
print(f"Total number of carbon credits the company needs to buy to have an *All Emissions Compensated* stamp: {total_carbon} Carbon Credits. <br>/ The price invested would be {total_price}")
