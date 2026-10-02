/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Direction of metric change considered desirable.
 */

export type ExperimentsMetricV2DTODataAttributesDesiredChange =
  | typeof METRIC_INCREASES
  | typeof METRIC_DECREASES
  | typeof UNKNOWN
  | UnparsedObject;
export const METRIC_INCREASES = "METRIC_INCREASES";
export const METRIC_DECREASES = "METRIC_DECREASES";
export const UNKNOWN = "UNKNOWN";
