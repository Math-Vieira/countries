export async function setBorders(borders) {
    const baseURL = "https://restcountries.com/v2/";
    const alphaCodes = "alpha?codes=";
    const finalURL = baseURL + alphaCodes + borders.join(",");
    const data = await fetch(finalURL);
    const objectData = await data.json();
    const BorderCountries = objectData.map((e) => e.name);
    return BorderCountries;
}
