import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import BlackCloud from "../assets/BlackCloud.png";
import { countries } from "../data/countries";
import { CountryFootprint } from "../services/types";
import { postCarbonFootprint } from "../services/api";

interface FirstSectionProps {
    onCountrySelected: (data: CountryFootprint) => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({onCountrySelected}) => {
    
  const [country, setCountry] = useState<string>("");

  const handleCountryChange = async (event: SelectChangeEvent<string>) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);

    try {
      const response = await postCarbonFootprint({
        type: "electricity",
        electricity_unit: "mwh",
        electricity_value: 42,
        country: selectedCountry,
      });

      if (response) {
        onCountrySelected(response.data); // Przekazujemy dane do `Home`
      }
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
    }
  };

return (
    <div className="bg-gradient-to-r from-[#0caeff] to-[#86d7ff] h-full  text-center pt-35 pb-20">
      <h1 className="text-4xl font-bold text-white mb-8">Discover your Carbon footprint!</h1>
      <div className="flex justify-center items-center mb-12 p-2">
        <div className="text-left max-w-xl">
          <h2 className="text-2xl mb-4 text-white">
            Get accurate emissions data for your country and calculate your carbon footprint before your next trip or shipment.
          </h2>
        </div>
        <img src={BlackCloud} alt="Black Cloud" className="w-120 h-auto" />
      </div>
      <div className="flex justify-center">
        <FormControl sx={{width:500}}>
          <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
          <Select
            id="countrySelect"
            value={country}
            label="Select Country"
            onChange={handleCountryChange}
            className="w-full"
            sx={{
                color: '#4A4A4A',
              }}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
  
};

export default FirstSection;

