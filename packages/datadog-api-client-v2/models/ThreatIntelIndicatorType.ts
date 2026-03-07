/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of threat indicator.
 */

export type ThreatIntelIndicatorType =
  | typeof IP_ADDRESS
  | typeof DOMAIN
  | typeof SHA256
  | UnparsedObject;
export const IP_ADDRESS = "ip_address";
export const DOMAIN = "domain";
export const SHA256 = "sha256";
