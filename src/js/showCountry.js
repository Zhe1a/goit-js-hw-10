 export function showCountryList({flags,name}) {
  return  `<li class = country-item>
    <img class = 'country-list__flags' src="${flags.svg}" alt="${name.official}" width=50/>
    <h2 class = country-list__name>${name.official}</h2>
    </li>`
}

export function showCountryCard({flags, name, capital, population, languages}) {
    return `<div class="country">
      <img class = "capital-flag" src="${flags.svg}" alt="${name.official}" width = 100/>
      <h2>Country: ${name.official}</h2>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>
    </div>`
}