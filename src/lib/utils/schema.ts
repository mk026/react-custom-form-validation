export interface Field {
  name: string;
  value: string;
  isTouched: boolean;
  errors: string[];
}

export interface Schema extends Record<string, Field> {}

export const createSchema = (config: Record<string, any>) => {
  const schema: Schema = {};
  for (const name in config) {
    const field: Field = {
      name,
      value: "",
      isTouched: false,
      errors: [],
    };
    schema[name] = field;
  }
  return schema;
};
