import cities from "../cities.js";

const citiesController = {
  getAllCities: (req, res, next) => {
    res.json({
      response: cities,
      success: true,
      console: null,
    });
  },

  getOneCity: (req, res, next) => {

		const { id } = req.params;
		// console.log(id)
		const city = cities.find(city => city.id === id);
	

    res.json({
      response: city,
      success: true,
      console: null,
    });
  },
};

export default citiesController;
