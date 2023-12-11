const Launch = require('../models/launchModel');
const launchProvider = require('../providers/launchProvider')

exports.listAllLaunches = async(req, res) =>{
    try {
        const launches = await Launch.find({});
        res.status(201).json(launches);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Erreur serveur'});
    }
}


exports.createLaunch = async(req, res) =>{
    try {
        const launches = launchProvider.getAllLaunches();
        const response = await launches;

        for( let i = 0; i < response.length; i++ ) new Launch(response[i]).save();

        res.status(201).json({message : 'ok'});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Erreur serveur'});
    }
}