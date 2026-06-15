/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The telemetry source that a tag policy applies to.
 */

export type TagPolicySource =
  | typeof LOGS
  | typeof SPANS
  | typeof METRICS
  | typeof RUM
  | typeof FEED
  | UnparsedObject;
export const LOGS = "logs";
export const SPANS = "spans";
export const METRICS = "metrics";
export const RUM = "rum";
export const FEED = "feed";
