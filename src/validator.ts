import Joi from 'joi'

const validator = (schema: Joi.ObjectSchema<any>) => (payload: object) => schema.validate(payload, { abortEarly: false })

const objectIdSchema = Joi.object({
  _id: Joi.string().min(24).max(24).required(),
})

export const validationObjectId = validator(objectIdSchema)
