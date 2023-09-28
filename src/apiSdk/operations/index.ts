import queryString from 'query-string';
import { OperationInterface, OperationGetQueryInterface } from 'interfaces/operation';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOperations = async (
  query?: OperationGetQueryInterface,
): Promise<PaginatedInterface<OperationInterface>> => {
  return fetcher('/api/operations', {}, query);
};

export const createOperation = async (operation: OperationInterface) => {
  return fetcher('/api/operations', { method: 'POST', body: JSON.stringify(operation) });
};

export const updateOperationById = async (id: string, operation: OperationInterface) => {
  return fetcher(`/api/operations/${id}`, { method: 'PUT', body: JSON.stringify(operation) });
};

export const getOperationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/operations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOperationById = async (id: string) => {
  return fetcher(`/api/operations/${id}`, { method: 'DELETE' });
};
