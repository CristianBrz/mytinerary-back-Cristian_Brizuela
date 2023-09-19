import Itinerary from "../Models/Itinerary.js";
import City from "../Models/City.js";

const itinerariesController = {
  getAllItineraries: async (req, res, next) => {
    let allItineraries;
    let error = null;
    let success = true;

    try {
      allItineraries = await Itinerary.find().populate({
        path: "city",
        select: "city",
      });
    } catch (err) {
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response: allItineraries,
      success,
      console,
    });
  },

  getOneItinerary: async (req, res, next) => {
    const { id } = req.params;
    // console.log(id)
    let itinerary;
    let error = null;
    let success = true;

    try {
      // city = await City.findOne({ _id: id });
      itinerary = await Itinerary.findById(id);
    } catch (err) {
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response: itinerary,
      success,
      console,
    });
  },

  createOneItinerary: async (req, res, next) => {
    // console.log(req.body)
    let itinerary;
    let error = null;
    let success = true;

    try {
      const city = await City.findOne({ city: req.body.city });
      const query = { ...req.body };
      query.city = city._id;

      itinerary = await Itinerary.create(query);
      await City.findOneAndUpdate(
        { _id: query.city },
        { $push: { itineraries: itinerary._id } }
      );
    } catch (err) {
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response: itinerary,
      success,
      console,
    });
  },

  updateOneItinerary: async (req, res, next) => {},

  deleteOneItinerary: async (req, res, next) => {},
};

export default itinerariesController;
