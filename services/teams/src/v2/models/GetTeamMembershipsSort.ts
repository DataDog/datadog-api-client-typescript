import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the order of returned team memberships
 */
export type GetTeamMembershipsSort =
  | typeof MANAGER_NAME
  | typeof _MANAGER_NAME
  | typeof NAME
  | typeof _NAME
  | typeof HANDLE
  | typeof _HANDLE
  | typeof EMAIL
  | typeof _EMAIL
  | UnparsedObject;
export const MANAGER_NAME = "manager_name";
export const _MANAGER_NAME = "-manager_name";
export const NAME = "name";
export const _NAME = "-name";
export const HANDLE = "handle";
export const _HANDLE = "-handle";
export const EMAIL = "email";
export const _EMAIL = "-email";
