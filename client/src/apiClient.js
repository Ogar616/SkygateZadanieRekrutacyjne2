import axios from "axios";

const openaq =
  "https://api.openaq.org/v1/locations?parameters=pm10&order_by=count&sort=desc&limit=10&country=";
const wiki =
  "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&redirects&titles=";

const server = "http://localhost:3001/";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

const getData = (country, addCity) => {
  axios.get(openaq + country).then(response => {
    const cities = response.data.results.map(item => item.city);
    cities.forEach(city => {
      fetchData(city).then(() => {
        axios
          .get(wiki + city)
          .then(response => {
            let id;
            for (let key in response.data.query.pages) {
              id = key;
            }
            const description = response.data.query.pages[id].extract;
            addCity({city, description});
          })
          .catch(error => {
            console.log("Ooops ", error);
          });
      });
    })
  });
};

const getInputValue = dispatch => {
  fetch(server + "input", {
    mode: "cors",
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .then(inputValue => {
      return dispatch(inputValue);
    });
};

const putInputValue = newInput => {
  fetch(server + "input", {
    mode: "cors",
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: newInput
  })
    .then(response => {
      return response.json();
    })
    .then(inputValue => {
      console.log("newInputValue", inputValue);
      return inputValue;
    })
    .catch(error => console.log("Ooops", error));
};

export { getData, getInputValue, putInputValue };
