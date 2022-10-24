// const express = require('express');
// const router = express.Router();
// const getDirect = require('../controllers/mainDirect');

// router.get('/',getDirect.getHomePage);
// router.get('/contact',getDirect.getContactPage);

// module.exports = router;



const express = require('express');
const router = express.Router();
const getDirect = require('../controllers/mainDirect');

router.get('/',getDirect.getHomePage);
router.get('/about',getDirect.getAbout);
router.get('/contact',getDirect.getContact);
router.get('/allblogs', getDirect.getAllBlogsPage);
router.get('/blog1', getDirect.getBlog1);
router.get('/aboutProject', getDirect.getAboutProject);
router.get('/process', getDirect.getProcess);
router.get('/pricing', getDirect.getPricing);
router.get('/clients', getDirect.getClients);


module.exports = router;