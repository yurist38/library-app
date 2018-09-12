import constants from './constants';

export function isProduction(): boolean {
  return process.env.NODE_ENV === constants.environments.prod;
}
