export interface ICountry{
    countryCode:string,
    name:string
}
export interface ICountryInfo {
    
        commonName: string,
        officialName: string,
        countryCode: string,
        region: string,
        borders: ICountryInfo[] | null
}
export interface IState{
 
        allCountries : ICountry[], 
        randomCountries:ICountry[]
       
    
}