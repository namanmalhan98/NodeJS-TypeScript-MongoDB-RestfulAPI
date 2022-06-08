import express from 'express';
import {
  getAllCardUserInfo, getSingleCardUserInfo, addNewCardUserInfo, UpdateCardUserByID, DeleteCardUserDetailByID,
} from '../controllers/CardController';
import {
  addNewUserDetail, deleteUserDetail, getAllUserDetails, getSingleUserDetail, updateUserDetail,
} from '../controllers/userController';

// add this inside your route

const router = express.Router();

// UserDetails routes
router.get('/getAllInfo', getAllUserDetails);

router.get('/getSingleUserInfo/:id', getSingleUserDetail);

router.post('/addNewUserInfo', addNewUserDetail);

router.patch('/UpdateByID/:id', updateUserDetail);

router.delete('/DeleteByID/:id', deleteUserDetail);

// Card routes
router.get('/getAllCardUserInfo', getAllCardUserInfo);

router.get('/getSingleCardUserInfo/:id', getSingleCardUserInfo);

router.post('/addNewCardUserInfo', addNewCardUserInfo);

router.patch('/UpdateCardUserByID/:id', UpdateCardUserByID);

router.delete('/DeleteCardUserDetailByID/:id', DeleteCardUserDetailByID);

export { router };
