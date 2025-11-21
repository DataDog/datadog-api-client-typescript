/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of value to extract from a test for a Synthetic global variable.
 */

export type SyntheticsGlobalVariableParseTestOptionsType =
  | typeof HTTP_BODY
  | typeof HTTP_HEADER
  | typeof HTTP_STATUS_CODE
  | typeof LOCAL_VARIABLE
  | UnparsedObject;
export const HTTP_BODY = "http_body";
export const HTTP_HEADER = "http_header";
export const HTTP_STATUS_CODE = "http_status_code";
export const LOCAL_VARIABLE = "local_variable";
