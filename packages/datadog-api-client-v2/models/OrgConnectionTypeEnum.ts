/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Available connection types between organizations.
 */

export type OrgConnectionTypeEnum =
  | typeof LOGS
  | typeof METRICS
  | UnparsedObject;
export const LOGS = "logs";
export const METRICS = "metrics";
