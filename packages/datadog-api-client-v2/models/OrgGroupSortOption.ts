/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Field to sort org groups by.
 */

export type OrgGroupSortOption =
  | typeof NAME
  | typeof MINUS_NAME
  | typeof UUID
  | typeof MINUS_UUID
  | UnparsedObject;
export const NAME = "name";
export const MINUS_NAME = "-name";
export const UUID = "uuid";
export const MINUS_UUID = "-uuid";
