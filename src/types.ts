export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

export type JsonObject = { [Key in string]?: JsonValue }

export type JsonArray = Array<JsonValue>

export interface InstanceParams {
  database: string,
  token: string,
}

export interface GetDeleteQueryParams {
  document: string
}

export interface SetUpdateQueryParams {
  document: string,
  payload: JsonObject,
}