import express from 'express';
import baseController from '../bController/aBaseController';
import validatorMiddleware, { baseCreateValidation, baseDeleteValidation, baseRetrieveValidation, baseUpdateValidation } from '../../bMiddleware/cValidatorMiddleware';


const router = express.Router();

router.route("/list").get(baseController().list)
router.route("/create").post(baseCreateValidation(), validatorMiddleware, baseController().create)
router.route("/retrieve/:id").get(baseRetrieveValidation(), validatorMiddleware, baseController().retrieve)
router.route("/update/:id").put(baseUpdateValidation(), validatorMiddleware, baseController().update)
router.route("/delete/:id").delete(baseDeleteValidation(), validatorMiddleware, baseController().delete)

export const baseRoute = router;
