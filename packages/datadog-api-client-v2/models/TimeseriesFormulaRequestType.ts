/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource. The value should always be timeseries_request.
 */

export type TimeseriesFormulaRequestType =
  | typeof TIMESERIES_REQUEST
  | UnparsedObject;
export const TIMESERIES_REQUEST = "timeseries_request";
