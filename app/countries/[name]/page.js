import {notFound} from 'next/navigation';
import CountryDetails from '@/components/CountryDetails';

const getCountry = async (countryName) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  return res.json();
}

export async function generateMetadata({params}) {
  return {
    title: `Country - ${params?.name}`,
    description: 'List of countries in the world.'
  }
}

const Country = async ({params}) => {

  const data = await getCountry(params?.name);
  const country = data[0];

  if(!country) {
    notFound();
  }
  
  return(
      <CountryDetails country={country} />
  )
}

export default Country;