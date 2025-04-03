import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsAggregateBucketValueTimeseriesPoint } from "./LogsAggregateBucketValueTimeseriesPoint";

/**
 * A bucket value, can be either a timeseries or a single value
 */
export type LogsAggregateBucketValue =
  | string
  | number
  | Array<LogsAggregateBucketValueTimeseriesPoint>
  | UnparsedObject;
