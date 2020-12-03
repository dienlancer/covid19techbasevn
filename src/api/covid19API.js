import { fetchWithDelay } from './fetch';
const fetchCovid19 = (url)=>{
  return fetchWithDelay(url);
}
export const covid19API = {
  fetchCovid19,
};