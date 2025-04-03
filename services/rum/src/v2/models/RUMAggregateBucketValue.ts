import { UnparsedObject } from "@datadog/datadog-api-client";

import { RUMAggregateBucketValueTimeseriesPoint } from "./RUMAggregateBucketValueTimeseriesPoint";

/**
 * A bucket value, can be either a timeseries or a single value.
 */
export type RUMAggregateBucketValue =
  | string
  | number
  | Array<RUMAggregateBucketValueTimeseriesPoint>
  | UnparsedObject;
