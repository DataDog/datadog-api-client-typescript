import { UnparsedObject } from "@datadog/datadog-api-client";

import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { ListStreamWidgetRequest } from "./ListStreamWidgetRequest";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";

/**
 * Request object for the wildcard widget. Each variant represents a distinct data-fetching pattern: scalar formulas, timeseries formulas, list streams, and histograms.
 */
export type WildcardWidgetRequest =
  | TreeMapWidgetRequest
  | TimeseriesWidgetRequest
  | ListStreamWidgetRequest
  | DistributionWidgetRequest
  | UnparsedObject;
