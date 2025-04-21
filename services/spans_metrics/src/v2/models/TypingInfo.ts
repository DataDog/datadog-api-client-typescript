import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SpansMetricCompute } from "./SpansMetricCompute";
import { SpansMetricCreateAttributes } from "./SpansMetricCreateAttributes";
import { SpansMetricCreateData } from "./SpansMetricCreateData";
import { SpansMetricCreateRequest } from "./SpansMetricCreateRequest";
import { SpansMetricFilter } from "./SpansMetricFilter";
import { SpansMetricGroupBy } from "./SpansMetricGroupBy";
import { SpansMetricResponse } from "./SpansMetricResponse";
import { SpansMetricResponseAttributes } from "./SpansMetricResponseAttributes";
import { SpansMetricResponseCompute } from "./SpansMetricResponseCompute";
import { SpansMetricResponseData } from "./SpansMetricResponseData";
import { SpansMetricResponseFilter } from "./SpansMetricResponseFilter";
import { SpansMetricResponseGroupBy } from "./SpansMetricResponseGroupBy";
import { SpansMetricUpdateAttributes } from "./SpansMetricUpdateAttributes";
import { SpansMetricUpdateCompute } from "./SpansMetricUpdateCompute";
import { SpansMetricUpdateData } from "./SpansMetricUpdateData";
import { SpansMetricUpdateRequest } from "./SpansMetricUpdateRequest";
import { SpansMetricsResponse } from "./SpansMetricsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SpansMetricComputeAggregationType: ["count", "distribution"],
    SpansMetricType: ["spans_metrics"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SpansMetricCompute: SpansMetricCompute,
    SpansMetricCreateAttributes: SpansMetricCreateAttributes,
    SpansMetricCreateData: SpansMetricCreateData,
    SpansMetricCreateRequest: SpansMetricCreateRequest,
    SpansMetricFilter: SpansMetricFilter,
    SpansMetricGroupBy: SpansMetricGroupBy,
    SpansMetricResponse: SpansMetricResponse,
    SpansMetricResponseAttributes: SpansMetricResponseAttributes,
    SpansMetricResponseCompute: SpansMetricResponseCompute,
    SpansMetricResponseData: SpansMetricResponseData,
    SpansMetricResponseFilter: SpansMetricResponseFilter,
    SpansMetricResponseGroupBy: SpansMetricResponseGroupBy,
    SpansMetricUpdateAttributes: SpansMetricUpdateAttributes,
    SpansMetricUpdateCompute: SpansMetricUpdateCompute,
    SpansMetricUpdateData: SpansMetricUpdateData,
    SpansMetricUpdateRequest: SpansMetricUpdateRequest,
    SpansMetricsResponse: SpansMetricsResponse,
  },
};
