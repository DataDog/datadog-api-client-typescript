/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type of the page target.
 */

export type OnCallPageTargetRelationshipDataType =
  | typeof TEAMS
  | typeof USERS
  | typeof CROSS_ORG_HANDLES
  | UnparsedObject;
export const TEAMS = "teams";
export const USERS = "users";
export const CROSS_ORG_HANDLES = "cross_org_handles";
