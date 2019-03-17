//openaq API is not working properly when used proper way according to documentation. "parameters=bc" query is giving different pollutions measurments in every record. Odrering measurments by for example by pm10 is not working as well. https://api.openaq.org/v1/measurements?parameters=pm10 - with any parameter is not giving any records - gateway tiemout. It is not a only one case. During app development few times API did not responded for about 15-20 minutes at all. To get app working I used LIST OF STATIONS (name-of-the-city - name-of-measurement-station)in chosen country sorted by count of measurements - descending witch is sometimes working :).
//Wikipedia API is highly unstructured. In some cases cities descriptions are descriptions of other things with the same names - especially in countries different than Poland and Germany.
//I've had 5 day for this task, and lost more than 2 for struggling with those APIs - I think you just gave it on purpose to see how I will handle this. I didn't want to use mockups, cause I wanted to use real endpoint.
//I asked Agnieszka Dombrowska for about 2 weekes for this task, and it was not ready. Then I received it in a suprising moment when I was terribly busy, so I did it as it is in 4 days. Because of that reasons UX is not perfect, it is basically a draft - I am sure that you know how easy you can build nice looking user interfaces in Material UI.
//If it's possible please give me some informations/code review before friday march 22th - I have some other work possibilities and I need to make some decisions. I make no secret of the fact that Skygate is the most desired company for me to start with :)

import axios from "axios";

const openaq =
  "https://api.openaq.org/v1/locations?parameters=pm10&order_by=count&sort=desc&limit=10&country=";
const wiki =
  "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&category=city&redirects&titles=";

const fetchData = () => new Promise(resolve => resolve());

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
