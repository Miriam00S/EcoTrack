import React from "react";
import ScaleImage from "../assets/Scale.png";
import { CountryFootprint as CountryFootprintType } from "../services/types";
import { countries } from "../data/countries";
import { emissionColors } from "../data/emissionColors";

interface CountryFootprintProps {
  data: CountryFootprintType;
}

// Funkcja do pobrania pełnej nazwy kraju na podstawie kodu
const getCountryNameByCode = (code: string) => {
    const country = countries.find((c: { code: string; }) => c.code === code);
    return country ? country.name : code;
  };

// Funkcja do wybrania koloru na podstawie wartości emisji
const getEmissionColor = (carbonMt: number) => {
    const emission = emissionColors.find((range) => carbonMt >= range.range[0] && carbonMt < range.range[1]);
    return emission ? emission.color : "#FFFFFF"; // Domyślny kolor, jeśli nie znaleziono
  };

const CountryFootprint: React.FC<CountryFootprintProps> = ({ data }) => {
    const carbonMt = parseFloat((data.attributes.carbon_mt * 10).toFixed(2)); // Zaokrąglenie do dwóch miejsc po przecinku

    return (
        <div className="flex justify-center items-center pt-40  pb-30 h-full bg-black text-white relative">
          {/* Pierwsza kolumna */}
          <div className="w-1/2 text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold self-center">
                {getCountryNameByCode(data.attributes.country)}'s Impact on Carbon Emissions
            </h2>
      
            {/* Liczba emisji */}
            <div className="mt-30 mb-30">
                <p className="text-6xl font-extrabold" style={{ color: getEmissionColor(carbonMt) }}>
                    {carbonMt}
                </p>
                <p className="text-2xl" style={{ color: getEmissionColor(carbonMt) }}>milion tones</p>
            </div>
          </div>
      
          {/* Druga kolumna */}
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-5xl font-bold self-center">Global Scale</h2>
            <div className="flex items-start mt-20">
              {/* Obrazek dopasowany do tekstu */}
              <img src={ScaleImage} alt="Global Scale" className="mr-4 h-[280px] w-[120px]" />
              <div className="text-left text-lg font-bold">
                <p className="mb-1">5 000 000 +</p>
                <p className="mb-1">1 000 000 - 5 000 000</p>
                <p className="mb-1">300 000 - 1 000 000</p>
                <p className="mb-1">100 000 - 300 000</p>
                <p className="mb-1">50 000 - 100 000</p>
                <p className="mb-1">20 000 - 50 000</p>
                <p className="mb-1">5 000 - 20 000</p>
                <p className="mb-1">1 000 - 5 000</p>
                <p className="mb-1">0 - 1 000</p>
              </div>
            </div>
          </div>
      
          {/* Data w lewym dolnym rogu całego diva */}
          <p className="text-sm text-white absolute bottom-4 left-4">
            Data from {new Date(data.attributes.estimated_at).toLocaleDateString()}
          </p>
        </div>
      );
      
      
};

export default CountryFootprint;
