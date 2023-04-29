export interface Schema extends Record<string, Field> {}

export interface SchemaConfig extends Record<string, FieldConfig> {}

export interface FieldConfig {
  isRequired?: boolean;
  validators: Validator[];
}

export interface Field extends FieldConfig {
  name: string;
  value: string;
  isTouched: boolean;
}

export interface Validator {
  (name: string, value: string): string | void;
}
