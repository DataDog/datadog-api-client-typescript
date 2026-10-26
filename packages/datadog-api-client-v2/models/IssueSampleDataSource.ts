/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Product that reported the error. The value is `NONE` when the error has no known origin.
 */

export type IssueSampleDataSource =
  | typeof APM
  | typeof LOGS
  | typeof RUM
  | typeof LLMOBS
  | typeof SYNTHETICS
  | typeof NONE
  | UnparsedObject;
export const APM = "APM";
export const LOGS = "LOGS";
export const RUM = "RUM";
export const LLMOBS = "LLMOBS";
export const SYNTHETICS = "SYNTHETICS";
export const NONE = "NONE";
