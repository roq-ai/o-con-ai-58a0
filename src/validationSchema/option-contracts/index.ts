import * as yup from 'yup';

export const optionContractValidationSchema = yup.object().shape({
  contract_details: yup.string().required(),
  company_id: yup.string().nullable(),
});
