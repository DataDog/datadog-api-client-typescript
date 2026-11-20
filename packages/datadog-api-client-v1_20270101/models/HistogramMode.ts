/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type HistogramMode =
  | typeof DISTRIBUTION_METRIC
  | typeof PRE_BINNED_METRIC
  | UnparsedObject;
export const DISTRIBUTION_METRIC = "distribution_metric";
export const PRE_BINNED_METRIC = "pre_binned_metric";
