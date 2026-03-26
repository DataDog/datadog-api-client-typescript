/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Subtype of the Synthetic test that produced this result.
 */

export type SyntheticsFastTestSubType =
  | typeof DNS
  | typeof GRPC
  | typeof HTTP
  | typeof ICMP
  | typeof MCP
  | typeof MULTI
  | typeof SSL
  | typeof TCP
  | typeof UDP
  | typeof WEBSOCKET
  | UnparsedObject;
export const DNS = "dns";
export const GRPC = "grpc";
export const HTTP = "http";
export const ICMP = "icmp";
export const MCP = "mcp";
export const MULTI = "multi";
export const SSL = "ssl";
export const TCP = "tcp";
export const UDP = "udp";
export const WEBSOCKET = "websocket";
