/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the timeseries coverage response resource.
 */

export type CommitmentsCoverageTimeseriesResponseType =
  | typeof COVERAGE_TIMESERIES_RESPONSE
  | UnparsedObject;
export const COVERAGE_TIMESERIES_RESPONSE = "coverage_timeseries_response";
