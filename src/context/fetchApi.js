import axios from "axios";

const options = {
  params: {
    maxResults: '100'
  },
  headers: {
    'X-RapidAPI-Key': 'c16325f58emsh5dbcd0689f7282cp163d69jsn522885501ba7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
 };


const rapidAPi = 'https://youtube-v31.p.rapidapi.com';

export const fetchData = async (url)=>{
    try{
        const response = await axios.get(`${rapidAPi}/${url}`,options);
        return response;
    }catch(err){
        console.log(err)
    }
}
    
  