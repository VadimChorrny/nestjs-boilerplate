import { getVariable } from '@/utils/enviroment/enviromentExtractor';

/* APPLICATION */
export const APPLICATION_PORT: string = getVariable('PORT');

/* MONGO */
export const DATABASE_URI: string = getVariable('DATABASE_URI');
export const DATABASE_NAME: string = getVariable('DATABASE_NAME');
export const DATABASE_USER: string = getVariable('DATABASE_USER');
export const DATABASE_PASS: string = getVariable('DATABASE_PASS');
