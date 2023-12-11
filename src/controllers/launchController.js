const Launch = require('../models/launchModel');
const launchApiProvider = require('../providers/launchApiProvider');

exports.listAllLaunch = async (req, res) => {
    
    try {
        // const response = await fetch('https://api.spacexdata.com/v4/launches');
        // const launches = await response.json();
    
        // res.json(launches);

        // let newPost = new Post(req.body);
        
        let launchesPromise = launchApiProvider.getLaunches();
        let response = await launchesPromise;

        // if ( !newPost.content ) {
        //     newPost.content = response;
        // }

        res.json(response);


        // let post = await newPost.save();
        // res.status(201).json(post);
    } catch (error) {
        console.error('Erreur', error);
        res.status(500).json({ error: 'Erreur' });
    }
    
}

exports.createAPost = async (req, res) => {

    // const newPost = new Post(req.body);
    
    // try {
    //     const post = await newPost.save();
    //     res.status(201);
    //     res.json(post);
    // } catch (error) {
    //     res.status(500);
    //     console.log(error);
    //     res.json({message: 'Erreur serveur'})
    // }

    try {
        let newPost = new Post(req.body);
        
        let randomTextPromise = textApiProvider.getRandomText();
        let response = await randomTextPromise;

        if ( !newPost.content ) {
            newPost.content = response;
        }

        let post = await newPost.save();
        res.status(201).json(post);

    } catch (error) {
        console.error(error);
        res.status(401).json({message: "requete invalide"});
    }
}

exports.updateAPost = async (req, res) => {

    try {
        const post = await Post.findByIdAndUpdate(req.params.id_post, req.body, {new: true});
        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }

}

exports.deleteAPost = async (req, res) => {
    
    try {
        await Post.findByIdAndDelete(req.params.id_post);
        res.status(200);
        res.json({message: 'Article supprimé'});

    } catch {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }

}

exports.getAPost = async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id_post);
        res.status(200);
        res.json(post);

    } catch {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }

}