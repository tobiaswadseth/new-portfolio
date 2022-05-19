/* eslint-disable no-unused-vars */
import resources from './_resources.json';

export const getAll = () => resources;

export const getById = (id) => resources.filter((resource) => resource.id === +id);
