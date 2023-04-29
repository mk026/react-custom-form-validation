import { Validator } from "../types";

export const createValidator = <
  F extends (...options: any) => Validator,
  P extends Parameters<F>
>(
  validatorFactory: (...options: P) => Validator
) => {
  return validatorFactory;
};
