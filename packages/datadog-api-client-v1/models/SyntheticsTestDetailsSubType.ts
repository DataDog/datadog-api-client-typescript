/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The subtype of the Synthetic API test, `http`, `ssl`, `tcp`,
 * `dns`, `icmp`, `udp`, `websocket`, `grpc` or `multi`.
 */

export type SyntheticsTestDetailsSubType =
  | typeof HTTP
  | typeof SSL
  | typeof TCP
  | typeof DNS
  | typeof MULTI
  | typeof ICMP
  | typeof UDP
  | typeof WEBSOCKET
  | typeof GRPC
  | UnparsedObject;
export const HTTP = "http";
export const SSL = "ssl";
export const TCP = "tcp";
export const DNS = "dns";
export const MULTI = "multi";
export const ICMP = "icmp";
export const UDP = "udp";
export const WEBSOCKET = "websocket";
export const GRPC = "grpc";
