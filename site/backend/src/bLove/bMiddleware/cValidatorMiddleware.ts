import express from 'express';
import { isValidObjectId } from 'mongoose';
import { body, param, validationResult } from 'express-validator';

import ErrorUtility from '../../bLove/cUtility/aErrorUtility';
import { BaseModel } from '../aMCR/aModel/aBaseModel';


const validatorMiddleware = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const errors = validationResult(request)

  const joinErrors = errors
    .array()
    .map(each => each.msg)
    .join(". ")

  if (errors.isEmpty()) return next();
  else return next(new ErrorUtility(joinErrors, 400));
}

// Base
const baseCreateValidation = () => [
  body("aTitle")
    .notEmpty().withMessage("Please enter title")
]

const baseRetrieveValidation = () => [
  param("id")
    .custom(value => {
      if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
      return true;
    })
    .custom(async value => {
      const retrieve = await BaseModel.findById(value);
      if (!retrieve) throw new ErrorUtility("Base Not Found", 404)
      return true;
    })
]

const baseUpdateValidation = () => [
  param("id")
    .custom(value => {
      if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
      return true;
    })
    .custom(async value => {
     const retrieve = await BaseModel.findById(value);
      if (!retrieve) throw new ErrorUtility("Base Not Found", 404)
      return true;
    })
]

const baseDeleteValidation = () => [
  param("id")
    .custom(value => {
      if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
      return true;
    })
    .custom(async value => {
      const retrieve = await BaseModel.findById(value);
      if (!retrieve) throw new ErrorUtility("Base Not Found", 404)
      return true;
    })
]

export default validatorMiddleware;
export {
  baseCreateValidation,
  baseRetrieveValidation,
  baseUpdateValidation,
  baseDeleteValidation
}
