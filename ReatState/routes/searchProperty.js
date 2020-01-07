import  express from 'express';
import  router from express.Router();
import  { searchByState, searchByCity , searchByID} from "../controllers/property";

/* GET home page. */
router.get('/city', searchByCity);
routrt.get('/state' , searchByState);
router.get(':id/', searchById);

module.exports = router;
