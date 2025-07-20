import * as yup from 'yup';

export const TODO_VALIDATION_SCHEMA = yup.object({
  text: yup.string().trim().required('Це поле не може бути порожнім'),
  deadline: yup
    .date()
    .required('Виберіть дедлайн')
    .min(new Date(), 'Дедлайн не може бути в минулому'),
});
