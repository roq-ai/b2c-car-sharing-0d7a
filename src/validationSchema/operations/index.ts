import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  operation_type: yup.string().nullable(),
  operation_status: yup.string().nullable(),
  operation_details: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
