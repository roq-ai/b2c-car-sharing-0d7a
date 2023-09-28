import queryString from 'query-string';
import { DashboardInterface, DashboardGetQueryInterface } from 'interfaces/dashboard';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDashboards = async (
  query?: DashboardGetQueryInterface,
): Promise<PaginatedInterface<DashboardInterface>> => {
  return fetcher('/api/dashboards', {}, query);
};

export const createDashboard = async (dashboard: DashboardInterface) => {
  return fetcher('/api/dashboards', { method: 'POST', body: JSON.stringify(dashboard) });
};

export const updateDashboardById = async (id: string, dashboard: DashboardInterface) => {
  return fetcher(`/api/dashboards/${id}`, { method: 'PUT', body: JSON.stringify(dashboard) });
};

export const getDashboardById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/dashboards/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDashboardById = async (id: string) => {
  return fetcher(`/api/dashboards/${id}`, { method: 'DELETE' });
};
