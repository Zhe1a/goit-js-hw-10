
export function fetchCountries(name) {
    const array = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
     return fetch(array).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
}


