const { response } = require("express");
const { CityService } = require("../services/index");

const cityServices = new CityService;

//POST req 
const create = async(req, res)=>{
    try {
        const city = await cityServices.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "city is created successfully",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city is not created",
            error: error
        })
    }
}

//DELETE req --> /city/:id 
const destroy = async (req, res)=>{
    try {
        const response = await cityServices.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted the city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to delete the city",
            err: error
        })
    }
}

//GET req --> /city/:id
const get = async (req, res)=>{
    try {
        const city = await cityServices.getCity(req.params.id);
        return req.status(200).json({
            data: city,
            success: true,
            message: "Successfully able to fetch the city.",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        })
    }
}

//PATCH req --> /city/:id -> req.body

const update = async (req, res)=>{
    try {
        const city = await cityServices.updateCity(req.params.id, req.body);
        return res.status(200),json({
            data: city,
            success: true,
            message: "Successfully updated the city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        })
    }
}