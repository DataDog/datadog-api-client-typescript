/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Subtype of the Synthetic Network Path test: `tcp`, `udp`, or `icmp`.
 */

export type SyntheticsNetworkTestSubType =
  | typeof TCP
  | typeof UDP
  | typeof ICMP
  | UnparsedObject;
export const TCP = "tcp";
export const UDP = "udp";
export const ICMP = "icmp";
