/* eslint-disable no-unused-vars */
import products from './_products.json';
import * as fs from 'fs';

export const getAll = () => products;

export const getById = (id) => products.filter((product) => product.id === +id);

// export const download = (id) =>
// 	products.forEach(async (product) => {
// 		if (product.id === +id) {
// 			product.downloads++;
// 			await fs.writeFile('./_products.json', JSON.stringify(products));
// 			return;
// 		}
// 	});
