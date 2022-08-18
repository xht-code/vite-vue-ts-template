import axios, { AxiosRequestConfig } from 'axios'
import { useAxios, UseAxiosOptions } from '@vueuse/integrations/useAxios'

export interface RequestConfig extends AxiosRequestConfig {
  url: string
}

const GET_DEFAULT_CONFIG: AxiosRequestConfig = { method: 'GET' }

const axiosInstance = axios.create({
  baseURL: '/api'
})

export function useRequest(
  config: string | RequestConfig,
  options?: UseAxiosOptions
) {
  if (typeof config === 'string') {
    return useAxios(config, GET_DEFAULT_CONFIG, axiosInstance, options)
  }
  return useAxios(config.url, config, axiosInstance, options)
}

const request = axiosInstance
export default request
