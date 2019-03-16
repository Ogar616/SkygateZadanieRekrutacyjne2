const store = {
  cities: [
    { name: "warsaw", description: "dsfdsfs" },
    { name: "katowice", description: "dsfdsfs" },
    { name: "opole", description: "dsfdsfs" },
    { name: "kielce", description: "dsfdsfs" },
    { name: "krakow", description: "dsfdsfs" },
    { name: "lublin", description: "dsfdsfs" },
    { name: "gdans", description: "dsfdsfs" },
    { name: "poznan", description: "dsfdsfs" }
  ],
  inputValue: "Back"
};

const appRouter = app => {
  app.get("/", (req, res) => {
    res.send("Cities API!\n");
  });
  app.get("/store/cities", (req, res) => {
    res.status(200).send(store.cities);
  });
  app.get("/store/input", (req, res) => {
    res.status(200).json(store.inputValue);
  });
  app.put("/store/input", (req, res) => {
    console.log(req.body)
    store.inputValue = req.body;
    console.log(store.inputValue)
    res.status(200).json(store);
  });
};
module.exports = appRouter;
