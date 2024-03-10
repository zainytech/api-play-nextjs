import Image from 'next/image';

const getDog = async() =>{
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache:'no-cache'
  });
  const data = response.json();
  return data;
}
export default async function DogsApi() {
  const fetchedData = await getDog();
  console.log(fetchedData);
  return (
    <>
      <h1 className="text-center text-5xl font-bold pt-3">DogsApi</h1>
      
      <Image src={fetchedData.message} height={450} width={450} alt="dogs"></Image>
    </>
    );
}
