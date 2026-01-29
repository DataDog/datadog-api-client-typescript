/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the column in a dataset definition.
 */

export type SecurityMonitoringDatasetDefinitionColumnType =
  | typeof STRING
  | typeof INTEGER
  | typeof DOUBLE
  | typeof BOOLEAN
  | UnparsedObject;
export const STRING = "string";
export const INTEGER = "integer";
export const DOUBLE = "double";
export const BOOLEAN = "boolean";
