import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  total_bookings: yup.number().integer().nullable(),
  total_cars: yup.number().integer().nullable(),
  active_bookings: yup.number().integer().nullable(),
  inactive_bookings: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
