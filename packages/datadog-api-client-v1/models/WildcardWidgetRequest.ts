/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { ListStreamWidgetRequest } from "./ListStreamWidgetRequest";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Request object for the wildcard widget. Each variant represents a distinct data-fetching pattern: scalar formulas, timeseries formulas, list streams, and histograms.
 */

export type WildcardWidgetRequest =
  | TreeMapWidgetRequest
  | TimeseriesWidgetRequest
  | ListStreamWidgetRequest
  | DistributionWidgetRequest
  | UnparsedObject;
