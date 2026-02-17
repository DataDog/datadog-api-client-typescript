/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The sort parameters used for querying suppression rules.
 */

export type SecurityMonitoringSuppressionSort =
  | typeof NAME
  | typeof START_DATE
  | typeof EXPIRATION_DATE
  | typeof UPDATE_DATE
  | typeof ENABLED
  | typeof NAME_DESCENDING
  | typeof START_DATE_DESCENDING
  | typeof EXPIRATION_DATE_DESCENDING
  | typeof UPDATE_DATE_DESCENDING
  | typeof CREATION_DATE_DESCENDING
  | typeof ENABLED_DESCENDING
  | UnparsedObject;
export const NAME = "name";
export const START_DATE = "start_date";
export const EXPIRATION_DATE = "expiration_date";
export const UPDATE_DATE = "update_date";
export const ENABLED = "enabled";
export const NAME_DESCENDING = "-name";
export const START_DATE_DESCENDING = "-start_date";
export const EXPIRATION_DATE_DESCENDING = "-expiration_date";
export const UPDATE_DATE_DESCENDING = "-update_date";
export const CREATION_DATE_DESCENDING = "-creation_date";
export const ENABLED_DESCENDING = "-enabled";
