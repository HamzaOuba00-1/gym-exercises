export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
    
  };

  export const youtubeOptions = {
    method: 'GET',    
    headers: {
      'x-rapidapi-Host': 'youtube-search-and-download.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY 
      
    }
  };
  
  export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
  