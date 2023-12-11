// module.exports = (server) => {
//     const postController = require('../controllers/postController');

//     server.route('/posts')
//     .get(postController.listAllPosts)
//     .post(postController.createAPost)
//     .put(postController.updateAPost)
//     .delete(postController.deleteAPost);
// }

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     res.status(200);
//     res.end("Home");
//   })
  
// app.get('/posts', (req, res) => {
//     res.send('Liste des articles');
//     res.status(200);
// })

// app.get('/posts/:id', (req, res) => {
//     res.send(`Article ${req.params.id}`);
//     res.status(200);
//     // res.end(`Article ${req.params.id}`);
// })

const express = require('express');
const router = express.Router();

const launchController = require('../controllers/launchController');


// /posts
router
    .route('/')
    .get(launchController.listAllLaunch)
    .post(launchController.createAPost)

// /posts/:id_posts
// router
//     .route('/:id_post')
//     .put(postController.updateAPost)
//     .get(postController.getAPost)
//     .delete(postController.deleteAPost);

module.exports = router;