import { getWorks } from "./endpoints/workEndpoints"
import { DataStructure } from "./types/workTypes"

const getAll = (): Promise<DataStructure> => {
  return fetch(getWorks)
    .then(res => res.json())
}

export {
  getAll
}
