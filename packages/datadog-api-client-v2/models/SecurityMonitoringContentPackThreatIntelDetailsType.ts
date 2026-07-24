/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type for threat intelligence content pack details.
 */

export type SecurityMonitoringContentPackThreatIntelDetailsType =
  | typeof THREAT_INTEL
  | UnparsedObject;
export const THREAT_INTEL = "threat_intel";
