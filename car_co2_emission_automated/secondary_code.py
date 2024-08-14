import pandas as pd

# Load the drivers and car consumption data
drivers = pd.read_csv('./Drivers_with_CO2.csv')

# Merge the drivers dataframe with the car_info dataframe to get the corresponding average_consumption
merged_data = pd.merge(drivers, car_info, on=['car_make', 'car_model', 'car_year', 'fuel_type'])

# Calculate the CO2 emissions for each driver
merged_data['co2_emission'] = merged_data['average_consumption'] * merged_data['km_done'] * 2.28 /1000

print(merged_data)
# Select relevant columns for the final output
final_data = merged_data[['id', 'drivers_name', 'drivers_last_name', 'hours_worked', 'km_done', 'car_make', 'car_model', 'car_year', 'fuel_type', 'co2_emission']]

# Save the final data to a new CSV file
final_data.to_csv('./Drivers_with_CO2.csv', index=False)

# Display the first few rows of the final dataframe
final_data.head()
