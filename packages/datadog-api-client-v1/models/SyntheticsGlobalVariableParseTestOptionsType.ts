/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Property of the Synthetics Test Response to use for a Synthetics global variable.
 */

export type SyntheticsGlobalVariableParseTestOptionsType =
  | typeof HTTP_BODY
  | typeof HTTP_HEADER
  | typeof LOCAL_VARIABLE;
export const HTTP_BODY = "http_body";
export const HTTP_HEADER = "http_header";
export const LOCAL_VARIABLE = "local_variable";
