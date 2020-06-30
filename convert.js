// raw data got from https://api.internal.teleport.org/api/urban_areas/?embed=ua:item,ua:item/ua:countries,ua:item/ua:images&droplinks=true
const data = require("./cities.raw.json");

const converted = data._embedded["ua:item"].map((item) => ({
    id: item.ua_id,
    city: item.name,
    country: item._embedded["ua:countries"][0].name,
    countryIso: item._embedded["ua:countries"][0].iso_alpha2,
    imageUrl: item._embedded["ua:images"].photos[0].image.web,
}));

console.log(JSON.stringify(converted, null, 4));
