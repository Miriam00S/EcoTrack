import FirstSection from './FirstSection';
import { CountryFootprint as CountryFootprintType } from "../services/types";
import { useState, useEffect } from 'react';
import CountryFootprint from './CountryFootprint';
import NewsList from './NewsList';
import FootprintCalculator from './FootprintCalculator';

const Home: React.FC = () => {
  const [selectedCountryData, setSelectedCountryData] = useState<CountryFootprintType | null>(null);

  // Funkcja przewijania strony w dół
  const scrollToCountryFootprint = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Jeżeli selectedCountryData zostało ustawione, przewijamy stronę
    if (selectedCountryData) {
      scrollToCountryFootprint();
    }
  }, [selectedCountryData]);

  return (
    <div className='w-screen'>
      <FirstSection onCountrySelected={(data) => setSelectedCountryData(data)} />
      
      {selectedCountryData && <CountryFootprint data={selectedCountryData} />}

      <div className="flex">
        {/* Lewa sekcja (3/5 szerokości) */}
        <div className="w-3/5 p-6">
          <FootprintCalculator />
        </div>
        
        {/* Prawa sekcja (2/5 szerokości) */}
        <NewsList />
      </div>
    </div>
  );
}

export default Home;
