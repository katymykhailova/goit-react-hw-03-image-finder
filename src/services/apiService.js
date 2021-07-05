//https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21396115-cf31dc04a3ddd307b254525ae';

async function ApiService(searchQuery, page) {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    const { hits } = await data;
    return hits;
  }

  throw new Error(`Нет изображений по ключевому слову ${searchQuery}`);

  //   return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     }

  //     return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  //   });
}

const api = {
  ApiService,
};

export default api;
