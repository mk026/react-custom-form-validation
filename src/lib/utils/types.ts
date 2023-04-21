export interface Schema extends Record<string, Field> {}

export interface Field {
  name: string;
  value: string;
  isTouched: boolean;
  validators: Validator[];
}

export interface Validator {
  (name: string, value: string): string | void;
}

export interface ValidatorFactory<T extends Record<string, any> = {}> {
  (options?: DefaultValidatorOptions & T): Validator;
}

export interface DefaultValidatorOptions {
  message?: string;
}
