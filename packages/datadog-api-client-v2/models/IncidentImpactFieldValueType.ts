/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of an impact field.
 */

export type IncidentImpactFieldValueType =
  | typeof DROPDOWN
  | typeof TEXT
  | typeof TEXTARRAY
  | typeof METRICTAG
  | typeof NUMBER
  | typeof DATETIME
  | typeof MULTISELECT
  | UnparsedObject;
export const DROPDOWN = "dropdown";
export const TEXT = "text";
export const TEXTARRAY = "textarray";
export const METRICTAG = "metrictag";
export const NUMBER = "number";
export const DATETIME = "datetime";
export const MULTISELECT = "multiselect";
