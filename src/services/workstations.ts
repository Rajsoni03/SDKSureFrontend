import { WorkstationsApiFactory } from './api/generated/apis/workstations-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'
import type { Workstation } from './api/generated/models/workstation'
import type { PatchedWorkstation } from './api/generated/models/patched-test-pc'

const workstationsApi = WorkstationsApiFactory(apiConfiguration, undefined, apiClient)

export const workstationsService = {
  list: (params?: { search?: string; ordering?: string; page?: number; status?: string }) =>
    workstationsApi.workstationsList(params ?? {}),
  create: (payload: Partial<Workstation>) => workstationsApi.workstationsCreate({ workstation: payload as any }),
  update: (id: string, payload: PatchedWorkstation) =>
    workstationsApi.workstationsPartialUpdate({ id, patchedWorkstation: payload as any }),
  ping: (id: string) =>
    apiClient.post<{ health: Record<string, string>; workstation: Workstation }>(
      `/api/v1/workstations/${id}/ping/`,
    ),
  updateAgent: (id: string) =>
    apiClient.post<{ detail: string; status_code: number }>(
      `/api/v1/workstations/${id}/update-agent/`,
    ),
}
