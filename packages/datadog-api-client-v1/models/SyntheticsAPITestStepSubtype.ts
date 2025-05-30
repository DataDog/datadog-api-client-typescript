/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The subtype of the Synthetic multi-step API test step.
 */

export type SyntheticsAPITestStepSubtype =
  | typeof HTTP
  | typeof GRPC
  | typeof SSL
  | typeof DNS
  | typeof TCP
  | typeof UDP
  | typeof ICMP
  | typeof WEBSOCKET
  | UnparsedObject;
export const HTTP = "http";
export const GRPC = "grpc";
export const SSL = "ssl";
export const DNS = "dns";
export const TCP = "tcp";
export const UDP = "udp";
export const ICMP = "icmp";
export const WEBSOCKET = "websocket";
