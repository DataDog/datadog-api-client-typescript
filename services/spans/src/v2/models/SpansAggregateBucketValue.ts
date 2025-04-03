import { UnparsedObject } from "@datadog/datadog-api-client";

import { SpansAggregateBucketValueTimeseriesPoint } from "./SpansAggregateBucketValueTimeseriesPoint";

/**
 * A bucket value, can be either a timeseries or a single value.
 */
export type SpansAggregateBucketValue =
  | string
  | number
  | Array<SpansAggregateBucketValueTimeseriesPoint>
  | UnparsedObject;
