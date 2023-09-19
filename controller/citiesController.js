import City from "../Models/City.js";
// import cities from "../cities.js";

const citiesController = {
  getAllCities: async (req, res, next) => {
    let allCities;
    let error = null;
    let success = true;

    try {
      allCities = await City.find().populate({
        path: "itineraries",
        select: "-id",
      });
    } catch (err) {
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response: allCities,
      success,
      console,
    });
  },

  getOneCity: async (req, res, next) => {
    const { id } = req.params;
    // console.log(id)
    let city;
    let error = null;
    let success = true;

    try {
      // city = await City.findOne({ _id: id });
      city = await City.findById(id).populate({
        path: "itineraries",
        select: "-id",
      });
    } catch (err) {
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response: city,
      success,
      console,
    });
  },

  createOneCity: async (req, res, next) => {
    // console.log(req.body)
    let city;
    let error = null;
    let success = true;

    try {
      city = await City.create(req.body);
    } catch (err) {
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response: city,
      success,
      console,
    });
  },

  updateOneCity: async (req, res, next) => {},

  deleteOneCity: async (req, res, next) => {},
};

export default citiesController;
