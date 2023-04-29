export type Validator = {
  (name: string, value: string): string | void;
};

export type Field = {
  name: string;
  value: string;
  isTouched: boolean;
  isRequired?: boolean | string;
  validators: Validator[];
};

export type FieldConfig = Pick<Field, "isRequired" | "validators">;

export type Schema = Record<string, Field>;

export type SchemaConfig = Record<string, FieldConfig>;
