/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of metric calculation.
 */

export type ExperimentsMetricV2DTODataAttributesMetricType =
  | typeof SIMPLE
  | typeof RATIO
  | typeof PERCENTILE
  | typeof UNKNOWN
  | UnparsedObject;
export const SIMPLE = "SIMPLE";
export const RATIO = "RATIO";
export const PERCENTILE = "PERCENTILE";
export const UNKNOWN = "UNKNOWN";
