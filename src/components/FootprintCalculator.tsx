import React, { useState } from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Autocomplete, TextField } from "@mui/material";
import { airports } from "../data/airports"; // Importujemy dane lotnisk

const FootprintCalculator: React.FC = () => {
  const [selectedTransport, setSelectedTransport] = useState<
    "flight" | "car" | "shipping"
  >("flight");
  const [result, setResult] = useState<number | null>(null);

  // Stan dla kodów lotnisk
  const [departureAirportCode, setDepartureAirportCode] = useState<string | null>(null);
  const [destinationAirportCode, setDestinationAirportCode] = useState<string | null>(null);
  const [numberOfPassengers, setNumberOfPassengers] = useState<number | "">();

  // Funkcja obsługująca kliknięcie przycisku obliczeń
  const handleCount = () => {
    // Tymczasowy wynik – można później dodać prawdziwe obliczenia
    const fakeResult = Math.floor(Math.random() * 500) + 100; // Losowa liczba 100-600
    setResult(fakeResult);
  };

  return (
    <div className="p-6">
      {/* Nagłówek */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Count your carbon footprint
      </h2>

      {/* Przyciski wyboru transportu */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button
          className={`flex flex-col items-center justify-center space-y-2 w-full px-4 py-2 rounded-md text-white 
          ${selectedTransport === "flight" ? "ring-2 ring-[#00AAFF]" : ""} 
          bg-gradient-to-r from-[#0caeff] to-[#86d7ff]`}
          onClick={() => setSelectedTransport("flight")}
        >
          <AirplanemodeActiveIcon />
          <span>Flight</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center space-y-2 w-full px-4 py-2 rounded-md text-white 
          ${selectedTransport === "car" ? "ring-2 ring-[#00AAFF]" : ""} 
          bg-gradient-to-r from-[#ffaa0c] to-[#ffd986]`}
          onClick={() => setSelectedTransport("car")}
        >
          <DirectionsCarIcon />
          <span>Car</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center space-y-2 w-full px-4 py-2 rounded-md text-white 
          ${selectedTransport === "shipping" ? "ring-2 ring-[#00AAFF]" : ""} 
          bg-gradient-to-r from-[#f30cff] to-[#f986ff]`}
          onClick={() => setSelectedTransport("shipping")}
        >
          <LocalShippingIcon />
          <span>Shipping</span>
        </button>
      </div>

      {/* Dynamiczny formularz */}
      <div className="mb-6">
        {selectedTransport === "flight" && (
            <div id="fligthForm">
                <div id="passengerNumber" className="mb-4">
                {/* Liczba pasażerów */}
                <TextField
                label="Number of passengers"
                variant="outlined"
                type="number"
                value={numberOfPassengers}
                onChange={(e) => setNumberOfPassengers(Number(e.target.value))}
                fullWidth
                />
                </div>
            <div className="grid grid-cols-2 gap-4">
                {/* Departament Airport */}
                <Autocomplete
                options={airports}
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => setDepartureAirportCode(value?.code || null)}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Departure airport"
                    variant="outlined"
                    />
                )}
                renderOption={(props, option) => (
                    <li {...props} key={option.code}>
                    {option.name} ({option.code})
                    </li>
                )}
                />

                {/* Destination Airport */}
                <Autocomplete
                options={airports}
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => setDestinationAirportCode(value?.code || null)}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Destination airport"
                    variant="outlined"
                    />
                )}
                renderOption={(props, option) => (
                    <li {...props} key={option.code}>
                    {option.name} ({option.code})
                    </li>
                )}
                />
            </div>
          </div>
        )}

        {selectedTransport === "car" && <p>🚗 Car form goes here...</p>}
        {selectedTransport === "shipping" && <p>🚢 Shipping form goes here...</p>}
      </div>

      {/* Przycisk Count */}
      <button
        className="w-[100px] mx-auto block py-2 text-white bg-[#0CAEFF] rounded-md font-bold"
        onClick={handleCount}
      >
        Count
      </button>

      {/* Wynik */}
      {result !== null && (
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Your travel will emit <span className="text-[#0CAEFF]">{result} g</span> of CO2
          {departureAirportCode} {destinationAirportCode}
        </p>
      )}
    </div>
  );
};

export default FootprintCalculator;
