import React from 'react';
import './ImageCard.css';

// const urlToCall = 'https://gateway.marvel.com/v1/public/characters?orderBy=modified&ts=1&apikey=9408dde31f0c9d6e41f9506fbb483c90&hash=1b84c5d3bf8dd03d589f7aad686c7ee4';

// const useFetchImageUrl = () => {
//   const [imageUrl, setData] = useState<string|undefined>(undefined);

//   useEffect(
//     () => {
//       async function fetchData() {
//         // const res = await fetch(urlToCall);
//         // const resJson = await res.json();
//         // const imageUrl = resJson.data.results[2].thumbnail.path;
//         // const extension = resJson.data.results[2].thumbnail.extension;
//         // setData(`${imageUrl}/standard_fantastic.${extension}`);
//         setData('http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c003c44095cb/standard_fantastic.png');
//       }
//       fetchData();
//     }
//   )

//   return imageUrl;
// }

function ImageCard(props: {imgUrl: string}) {
  // const imgUrl = useFetchImageUrl();

  return (
    <div>
      <div className="ImageCard-Wrapper" style={{backgroundImage: `url(${props.imgUrl})`}}>
      {/* <div className="ImageCard-mask"></div> */}
        {/* <img
        alt='ptite pic dla mif'
        src={imgUrl}>
        </img> */}
      </div>
    </div>
  )
}

export default ImageCard;