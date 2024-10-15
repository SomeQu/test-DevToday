import { reactive } from 'vue';
import { type ICountry, type IState } from '~/src/Types/types';

export default defineNuxtPlugin((nuxtApp) => {
  const state = reactive<IState>({

      allCountries: [],
      randomCountries:[]
  });

  const fetchAvailableCountries = async (code:string):Promise<IState|ICountry|undefined> => {
    try {
      const config = nuxtApp.$config;
      const response = await useFetch(`${config.public.apiBaseUrl}/${code}`);
    return response.data.value
      
    } catch (err) {
        console.log(err)
        return undefined
    }
  };

  nuxtApp.provide('state', {
    state
  });
  nuxtApp.provide('fetcher',{
    fetchAvailableCountries
  })
});
