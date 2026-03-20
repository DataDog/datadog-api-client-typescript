/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of values for the feature flag variants.
 */

export type ValueType =
  | typeof BOOLEAN
  | typeof INTEGER
  | typeof NUMERIC
  | typeof STRING
  | typeof JSON
  | UnparsedObject;
export const BOOLEAN = "BOOLEAN";
export const INTEGER = "INTEGER";
export const NUMERIC = "NUMERIC";
export const STRING = "STRING";
export const JSON = "JSON";
