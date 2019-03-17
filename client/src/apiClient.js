import axios from "axios";

const openaq =
  "https://api.openaq.org/v1/locations?parameters=pm10&order_by=count&sort=desc&limit=10&country=";
const wiki =
  "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&category=city&redirects&titles=";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

const getData = (country, addCity) => {
  axios.get(openaq + country).then(response => {
    const cities = response.data.results.map(item => {
      return { name: item.city, location: item.location };
    });
    cities.forEach(city => {
      fetchData(city.name).then(() => {
        axios
          .get(wiki + city.name)
          .then(response => {
            let id;
            for (let key in response.data.query.pages) {
              id = key;
            }
            const description = response.data.query.pages[id].extract;
            addCity({ city: `${city.name} - ${city.location}`, description });
          })
          .catch(error => {
            console.log("Ooops", error);
          });
      });
    });
  });
};

export default getData;
