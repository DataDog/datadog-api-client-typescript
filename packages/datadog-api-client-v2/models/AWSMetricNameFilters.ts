/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSMetricNameFiltersExcludeOnly } from "./AWSMetricNameFiltersExcludeOnly";
import { AWSMetricNameFiltersIncludeOnly } from "./AWSMetricNameFiltersIncludeOnly";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AWS CloudWatch metric name filter for a single namespace.
 * Exactly one of `include_only` or `exclude_only` must be set.
 */

export type AWSMetricNameFilters =
  | AWSMetricNameFiltersIncludeOnly
  | AWSMetricNameFiltersExcludeOnly
  | UnparsedObject;
