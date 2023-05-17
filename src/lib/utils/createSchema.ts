import { Field, Schema, SchemaConfig } from "../types";

export const createSchema = (config: SchemaConfig) => {
  const schema: Schema = {};
  for (const name in config) {
    const field: Field = {
      name,
      value: "",
      isTouched: false,
      isRequired: config[name].isRequired,
      match: config[name].match,
      validators: config[name].validators,
    };
    schema[name] = field;
  }
  return schema;
};
