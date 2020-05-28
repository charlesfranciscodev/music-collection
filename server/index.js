const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(cors());
app.use(bodyParser.json());

require("./routes/genreRoutes")(app);
require("./routes/artistsRoutes")(app);
require("./routes/tracksRoutes")(app);
require("./routes/albumsRoutes")(app);

app.get("/api/test", (req, res) => {
  res.json({
    "message": "Yo mamma so fat even penguins are jealous of the way she waddles."
  });
});

app.listen(PORT, HOST);
