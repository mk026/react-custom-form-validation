import { Field, Schema, Validator } from "./types";

export const createSchema = (config: Record<string, Validator[]>) => {
  const schema: Schema = {};
  for (const name in config) {
    const field: Field = {
      name,
      value: "",
      isTouched: false,
      validators: config[name],
    };
    schema[name] = field;
  }
  return schema;
};
