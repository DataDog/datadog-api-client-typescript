/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the multiple value field definitions.
 */

export type IncidentFieldAttributesValueType =
  | typeof MULTISELECT
  | typeof TEXTARRAY
  | typeof METRICTAG
  | typeof AUTOCOMPLETE
  | UnparsedObject;
export const MULTISELECT = "multiselect";
export const TEXTARRAY = "textarray";
export const METRICTAG = "metrictag";
export const AUTOCOMPLETE = "autocomplete";
