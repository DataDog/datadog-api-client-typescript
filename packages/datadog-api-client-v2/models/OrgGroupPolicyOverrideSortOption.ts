/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Field to sort overrides by.
 */

export type OrgGroupPolicyOverrideSortOption =
  | typeof ID
  | typeof MINUS_ID
  | typeof ORG_UUID
  | typeof MINUS_ORG_UUID
  | UnparsedObject;
export const ID = "id";
export const MINUS_ID = "-id";
export const ORG_UUID = "org_uuid";
export const MINUS_ORG_UUID = "-org_uuid";
