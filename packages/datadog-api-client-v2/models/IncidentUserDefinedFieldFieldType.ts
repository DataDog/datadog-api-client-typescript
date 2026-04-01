/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The data type of the field. 1=dropdown, 2=multiselect, 3=textbox, 4=textarray, 5=metrictag, 6=autocomplete, 7=number, 8=datetime.
 */

export type IncidentUserDefinedFieldFieldType =
  | typeof DROPDOWN
  | typeof MULTISELECT
  | typeof TEXTBOX
  | typeof TEXTARRAY
  | typeof METRICTAG
  | typeof AUTOCOMPLETE
  | typeof NUMBER
  | typeof DATETIME
  | UnparsedObject;
export const DROPDOWN = 1;
export const MULTISELECT = 2;
export const TEXTBOX = 3;
export const TEXTARRAY = 4;
export const METRICTAG = 5;
export const AUTOCOMPLETE = 6;
export const NUMBER = 7;
export const DATETIME = 8;
