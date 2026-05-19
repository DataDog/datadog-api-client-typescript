/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The data type of the custom attribute, which determines the allowed values and UI input control.
 */

export type CustomAttributeType =
  | typeof URL
  | typeof TEXT
  | typeof NUMBER
  | typeof SELECT
  | UnparsedObject;
export const URL = "URL";
export const TEXT = "TEXT";
export const NUMBER = "NUMBER";
export const SELECT = "SELECT";
