import axios, { AxiosInstance } from 'axios'
import { GetDeleteQueryParams, InstanceParams, JsonObject, SetUpdateQueryParams } from './types'

export class MonoceInstance {
  #instance: AxiosInstance
  constructor({ database, token }: InstanceParams) {
    this.#instance = axios.create({
      baseURL: 'https://api.monoce.com/',
      method: 'POST',
      timeout: 2000,
      data: { database, token },
      responseType: 'json',
      headers: {  
        'Content-Type': 'application/json',
      },
    })
  }

  private async queryDocumentMethod({ document }: GetDeleteQueryParams, url: '/get' | '/delete'): Promise<JsonObject | null> {
    const { data } = await this.#instance.request({ url, data: { ...this.#instance.defaults.data, document } })
    return data || {}
  }

  async get(params: GetDeleteQueryParams): Promise<JsonObject | null> {
    return await this.queryDocumentMethod(params, '/get')
  }

  async delete(params: GetDeleteQueryParams): Promise<JsonObject | null> {
    return await this.queryDocumentMethod(params, '/delete')
  }

  private async mutationDocumentMethod(setParams: SetUpdateQueryParams, url: '/set' | '/update'): Promise<JsonObject | null> {
    const { data } = await this.#instance.request({ url, data: { ...this.#instance.defaults.data, ...setParams } }) 
    return data || {}
  }

  async set(params: SetUpdateQueryParams): Promise<JsonObject | null> {
    return await this.mutationDocumentMethod(params, '/set')
  }

  async update(params: SetUpdateQueryParams): Promise<JsonObject | null> {
    return await this.mutationDocumentMethod(params, '/update')
  }


}