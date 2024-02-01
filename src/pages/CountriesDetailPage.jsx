import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const CountriesDetailPage = () => {
  const countriesApi = 'https://restcountries.com/v3.1/all';
  const { cca2 } = useParams();

  const fetchDataByCca2 = async (cca2) => {
    const response = await fetch(`${countriesApi}/${cca2}`);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countryData } = useQuery({
    queryKey: ['countryChars', cca2],    
    queryFn: () => fetchDataByCca2(cca2),
  });
  

  return (
    <div>
      <h1>{countryData?.name?.common}</h1>
    </div>
  );
};