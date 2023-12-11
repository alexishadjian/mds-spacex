const Launch = require('../models/launchModel');
const launchApiProvider = require('../providers/launchApiProvider');

exports.listAllLaunch = async (req, res) => {
    
    try {

        let launchesPromise = launchApiProvider.getLaunches();
        let response = await launchesPromise;

        res.json(response);

    } catch (error) {
        console.error('Erreur', error);
        res.status(500).json({ error: 'Erreur' });
    }
    
}