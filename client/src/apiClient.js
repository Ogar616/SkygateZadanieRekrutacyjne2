//openaq API is not working properly. "parameters=bc" query is giving different pollutions measurments in every record. Odrering measurments by for example pm10 is not working as well. https://api.openaq.org/v1/measurements?parameters=pm10 - with any parameter is not giving any records - gateway tiemout. It is not a only one case. During app development few times API did not responded for about 15-20 minutes at all. To get app working I used LIST OF STATIONS (name-of-the-city - name-of-measurement-station)in chosen country sorted by count of measurements - descending.
//Wikipedia API is highly unstructured. In some cases cities descriptions are descriptions of other things with the same name - especially in countries different than Poland and Germany.

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
            console.log("Ooops ", error);
          });
      });
    });
  });
};

export default getData;
