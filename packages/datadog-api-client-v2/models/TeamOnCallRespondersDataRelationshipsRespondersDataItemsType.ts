/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Identifies the resource type for individual user entities associated with on-call response.
 */

export type TeamOnCallRespondersDataRelationshipsRespondersDataItemsType =
  | typeof USERS
  | UnparsedObject;
export const USERS = "users";
