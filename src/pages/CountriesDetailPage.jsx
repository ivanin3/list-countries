import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const CountriesDetailPage = () => {
  const countriesApi = 'https://restcountries.com/v3.1/alpha';
  const { cca2 } = useParams();

  const fetchDataByCca2 = async (cca2) => {
    const response = await fetch(`${countriesApi}/${cca2}`);
    const jsonData = await response.json();
    return jsonData[0];
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ['countryChars', cca2],    
    queryFn: () => fetchDataByCca2(cca2),
  });
  console.log(countryData);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{countryData?.name.official}</h1>
      <h2>{countryData?.name.common}</h2>
      <p><b>Capital:</b> {countryData?.capital}</p>
      <p><b>Continent:</b> {countryData?.region}</p>
      <img src={countryData?.flags.png} alt="" />
    </div>
  );
};