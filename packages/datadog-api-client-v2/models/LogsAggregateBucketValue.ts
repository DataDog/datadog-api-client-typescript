/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateBucketValueTimeseriesPoint } from "./LogsAggregateBucketValueTimeseriesPoint";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A bucket value, can be either a timeseries or a single value
 */

export type LogsAggregateBucketValue =
  | string
  | number
  | Array<LogsAggregateBucketValueTimeseriesPoint>
  | UnparsedObject;
