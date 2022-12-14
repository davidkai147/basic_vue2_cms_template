// noinspection ES6CheckImport
import { Model as BaseModel } from 'javel'
import axios from '@/plugins/axios'
import { PER_PAGE } from '@/config'
import { pluralize, serialize } from '@/utils'

export default class Model extends BaseModel {
  baseUrl () {
    return '/api'
  }

  buildUrl ({params}) {
    return [pluralize(this.constructor.name).toLowerCase(), ...params]
  }

  makeRequest ({ method, url, data, query, config = {} }) {
    return axios({ method, url, data, params: query, ...config })
  }

  beforeRequest (request) {
    if (request.query) {
      // Serialize params
      request.query = serialize(request.query)
    }
    return request
  }

  afterRequest ({ data }, { action, isStatic }) {
    switch (action) {
      case 'custom':
        return data
      case 'paginate':
        data.data = this.make(data.data)
        return data
    }
    console.log(this.fill(data.data))
    return isStatic ? this.make(data.data) : this.fill(data.data)
  }

  static queryBuilder (options = {}) {
    const page = options.page || 1
    const perPage = options.perPage || PER_PAGE
    const sortColumn = options.sortColumn || 'updated_at'
    const sortDirection = options.sortDirection || 'desc'
    const sortBy = { [sortColumn]: sortDirection }
    const filter = options.filter || {}
    const fields = options.fields || {}
    return { page, perPage, filter, sortBy, fields }
  }
}
