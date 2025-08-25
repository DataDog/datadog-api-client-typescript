/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
