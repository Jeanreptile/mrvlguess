function getCharactersLocal(): {[key: string]: string} {
  return {
    "Chameleon": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/4ce59f390463f/standard_fantastic.jpg",
    "Cyber": "http://i.annihil.us/u/prod/marvel/i/mg/1/f0/4c0040521bc06/standard_fantastic.jpg",
    "Omega Red": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/4c003d09267ae/standard_fantastic.jpg",
    "Victor Mancha" : "http://i.annihil.us/u/prod/marvel/i/mg/b/10/4c0030f13bcaf/standard_fantastic.jpg",
    "Ajak": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215/standard_fantastic.jpg"
  }
}

const URL_TO_CALL = "https://mq6nzqx5mb.execute-api.us-east-1.amazonaws.com/dev/getCharacters";

async function getCharacters(): Promise<{ [key: string]: string; }> {
  let response = await fetch(URL_TO_CALL);
  let json = await response.json();

  let returnChacters: {[key: string]: string} = {};

  if (json && json.data && json.data.results && (json.data.results.length > 1)){
    const allCharacters = json.data.results;
    // Filter then Shuffle array
    const shuffled = allCharacters
    .filter( (x: any)=> x.thumbnail.path.indexOf('image_not_available') === -1)
    .sort(() => 0.5 - Math.random());
    // Get sub-array of first 5 elements after shuffled
    let selected = shuffled.slice(0, 5);
    selected.reduce( (acc: any, elem: any) => {
      acc[elem.name] = `${elem.thumbnail.path}/standard_fantastic.${elem.thumbnail.extension}`;
      return acc;
    }, returnChacters);
  }
  return returnChacters;
}

export { getCharacters };