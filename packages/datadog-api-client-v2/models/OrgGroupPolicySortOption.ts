/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Field to sort policies by.
 */

export type OrgGroupPolicySortOption =
  | typeof ID
  | typeof MINUS_ID
  | typeof NAME
  | typeof MINUS_NAME
  | UnparsedObject;
export const ID = "id";
export const MINUS_ID = "-id";
export const NAME = "name";
export const MINUS_NAME = "-name";
