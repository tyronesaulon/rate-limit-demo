export interface Email<Type, Data> {
  id: string; // uuid
  type: Type;
  data: Data;
}
