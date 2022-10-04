import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { reft } from "./js/reft";
import {showCountryList , showCountryCard} from"./js/showCountry"
import { fetchCountries} from "./js/fetchCountries"


const DEBOUNCE_DELAY = 300;

function targetElement(){
let target = reft.input.value.trim();
if(target === ""){
    reft.list.innerHTML = "";
    reft.info.innerHTML = "";
    return;
}
fetchCountries(target).then(countries =>{

    if(countries.length > 10){
        Notify.info('Too many matches found. Please enter a more specific name.');
        reft.list.innerHTML = "";
        reft.info.innerHTML = "";
        return;
    }

 if(countries.length > 1 && countries.length <= 10){
  
    const map = countries.map(count =>  showCountryList(count));
    reft.list.innerHTML = map.join(' ');
    reft.info.innerHTML = "";
 }
if(countries.length === 1){
    const country = countries.map(e => showCountryCard(e));
    reft.list.innerHTML = "";
    reft.info.innerHTML = country.join();
}

 }).catch(error=>{
    Notify.failure("Oops, there is no country with that name")
  reft.list.innerHTML = "";
  reft.info.innerHTML = "";
  return error;
 })

}


reft.input.addEventListener("input", debounce(targetElement,DEBOUNCE_DELAY))

