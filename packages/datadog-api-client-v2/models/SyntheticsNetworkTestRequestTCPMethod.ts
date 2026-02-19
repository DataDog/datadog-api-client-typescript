/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * For TCP tests, the TCP traceroute strategy.
 */

export type SyntheticsNetworkTestRequestTCPMethod =
  | typeof PREFER_SACK
  | typeof SYN
  | typeof SACK
  | UnparsedObject;
export const PREFER_SACK = "prefer_sack";
export const SYN = "syn";
export const SACK = "sack";
