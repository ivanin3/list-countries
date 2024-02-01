import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CountriesPage = () => {
  const [showChars, setShowChars] = useState(false);
  const countriesApi = 'https://restcountries.com/v3.1/all';

  const fetchData = async () => {
    const response = await fetch(countriesApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countryData } = useQuery({
    queryKey: ['countryChars'],
    queryFn: fetchData,
    enabled: showChars,
  });

  return (
    <div>
      <h1>Countries</h1>
      <button onClick={() => setShowChars(true)}>Show Country</button>
      <ul>
        {countryData?.map((char) => (
          <li key={char.name.common}>
            <Link to={char.cca2.toString()}>
              <p>{char.name.official}</p>
              <img src={char.flags.png} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
