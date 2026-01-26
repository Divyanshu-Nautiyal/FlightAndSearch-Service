const { where } = require('sequelize');
const { City } = require('../models/index');

class CityRepository{
    async createCity({ nameOfCity }){    //{name: "New Delhi"}
        try {
            const city = new City.create({
            name: nameOfCity      // name(in the sequelize model): name(passed in the function)
        })
        return city;
        } catch (error) {
            console.log("something wrong in repo layer");
            throw{error}
        }
        
    }

    async updateCity(data, cityId){ //here data will be an object({name: "paryagraj"})
        try {
            const city = City.update(data, {
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("something wrong in repo layer");
            throw{error};
        }
    }


    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("something wrong in repo layer");
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findbyPK(cityId);
            return city;
        } catch (error) {
            console.log("something wrong in repo layer");
            throw{error};
        }
    }
}

module.exports = CityRepository;