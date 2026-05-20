/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of call to perform. Used by gRPC steps (`healthcheck`, `unary`)
 * and MCP steps (`init`, `tool_list`, `tool_call`). Valid values depend on
 * the parent step's `subtype`.
 */

export type SyntheticsTestCallType =
  | typeof HEALTHCHECK
  | typeof UNARY
  | typeof INIT
  | typeof TOOL_LIST
  | typeof TOOL_CALL
  | UnparsedObject;
export const HEALTHCHECK = "healthcheck";
export const UNARY = "unary";
export const INIT = "init";
export const TOOL_LIST = "tool_list";
export const TOOL_CALL = "tool_call";
