/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The incident severity.
 */

export type IncidentSeverity =
  | typeof UNKNOWN
  | typeof SEV_0
  | typeof SEV_1
  | typeof SEV_2
  | typeof SEV_3
  | typeof SEV_4
  | typeof SEV_5
  | UnparsedObject;
export const UNKNOWN = "UNKNOWN";
export const SEV_0 = "SEV-0";
export const SEV_1 = "SEV-1";
export const SEV_2 = "SEV-2";
export const SEV_3 = "SEV-3";
export const SEV_4 = "SEV-4";
export const SEV_5 = "SEV-5";
