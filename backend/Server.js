const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4040;
const hostName = "192.168.0.103";
const axios = require("axios");
const YELP_API_KEY =
  "XIUmgZov5UT-BOzoLZnBySSORicrsI5qYK-K7rvlrgw3_mcDUWJzWd2IfDAhjBwVc7SXpF85V1BD3cLPMuq1ORNSqSA1K7mRfZ0cfSqIT2rSBkTlHylAn7C_VKhnYXYx";

//API

//App config
const app = express();

//Serve static files from the react app
//app.use(express.static(path.join(__dirname, "/build")));

//Middleware
app.use(cors()); //we are using cors for security reason
app.use(express.json());

//API routes
/*
app.get("/", function (req, res) {
  res.status(200).send("This is server");
});
*/

//Listen command

//exports.api = functions.https.onRequest(app); // it is needed for backend express running in cloud function
app.get("/yelp", cors(), async function (req, res) {
  console.log("Request Recieved");
  const cityName = req.query.nameOfCity;
  console.log(cityName);

  //Stripe codes
  try {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${cityName}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    const responseData = await axios.get(yelpURL, apiOptions);

    console.log(responseData.data); //responseData={ metaData,data:{ business:[{},{},{},{}] } }
    //ok-created
    console.log("hhhh");
    res.json(responseData.data);
  } catch (error) {
    console.log("Error", error);
    console.log(responseData.data);
  }
});

app.get("/*", function (req, res) {
  //res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, hostName, function () {
  //console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`Server listening at http://${hostName}:${PORT}`);
  console.log(path.join(__dirname));
});

//Example Endpoint
//   http://localhost:5001/clone-e6f51/us-central1/api
