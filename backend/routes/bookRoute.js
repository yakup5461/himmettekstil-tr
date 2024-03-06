import express from 'express';
import * as bookController from "../controllers/bookController.js" ;
const router = express.Router();

// eski yöntem
/* router.get('/',bookController.getAllBooks);
router.post('/',bookController.createABook); */

 router.route('/')
      .get(bookController.getAllBooks)
      .post(bookController.createABook); 

// eski yöntem
/* router.get('/:id',bookController.getABook);
router.put('/:id',bookController.updateABook);
router.delete('/:id',bookController.deleteABook); */

router.route('/:id')
      .put(bookController.updateABook)
      .delete(bookController.deleteABook)
      .get(bookController.getABook); 


export default router ;
