export type Validator = {
  (name: string, value: string): string | void;
};

export type MatchOptions = {
  to: string;
  message?: string;
};

export type Field = {
  name: string;
  value: string;
  isTouched: boolean;
  isRequired?: boolean | string;
  match?: MatchOptions;
  validators: Validator[];
};

export type FieldConfig = Pick<Field, "isRequired" | "validators" | "match">;

export type Schema = Record<string, Field>;

export type SchemaConfig = Record<string, FieldConfig>;
