import { UnparsedObject } from "@datadog/datadog-api-client";

import { CIAppAggregateBucketValueTimeseriesPoint } from "./CIAppAggregateBucketValueTimeseriesPoint";

/**
 * A bucket value, can either be a timeseries or a single value.
 */
export type CIAppAggregateBucketValue =
  | string
  | number
  | Array<CIAppAggregateBucketValueTimeseriesPoint>
  | UnparsedObject;
