import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { LogsMetricCompute } from "./LogsMetricCompute";
import { LogsMetricCreateAttributes } from "./LogsMetricCreateAttributes";
import { LogsMetricCreateData } from "./LogsMetricCreateData";
import { LogsMetricCreateRequest } from "./LogsMetricCreateRequest";
import { LogsMetricFilter } from "./LogsMetricFilter";
import { LogsMetricGroupBy } from "./LogsMetricGroupBy";
import { LogsMetricResponse } from "./LogsMetricResponse";
import { LogsMetricResponseAttributes } from "./LogsMetricResponseAttributes";
import { LogsMetricResponseCompute } from "./LogsMetricResponseCompute";
import { LogsMetricResponseData } from "./LogsMetricResponseData";
import { LogsMetricResponseFilter } from "./LogsMetricResponseFilter";
import { LogsMetricResponseGroupBy } from "./LogsMetricResponseGroupBy";
import { LogsMetricUpdateAttributes } from "./LogsMetricUpdateAttributes";
import { LogsMetricUpdateCompute } from "./LogsMetricUpdateCompute";
import { LogsMetricUpdateData } from "./LogsMetricUpdateData";
import { LogsMetricUpdateRequest } from "./LogsMetricUpdateRequest";
import { LogsMetricsResponse } from "./LogsMetricsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LogsMetricComputeAggregationType: ["count", "distribution"],
    LogsMetricResponseComputeAggregationType: ["count", "distribution"],
    LogsMetricType: ["logs_metrics"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    LogsMetricCompute: LogsMetricCompute,
    LogsMetricCreateAttributes: LogsMetricCreateAttributes,
    LogsMetricCreateData: LogsMetricCreateData,
    LogsMetricCreateRequest: LogsMetricCreateRequest,
    LogsMetricFilter: LogsMetricFilter,
    LogsMetricGroupBy: LogsMetricGroupBy,
    LogsMetricResponse: LogsMetricResponse,
    LogsMetricResponseAttributes: LogsMetricResponseAttributes,
    LogsMetricResponseCompute: LogsMetricResponseCompute,
    LogsMetricResponseData: LogsMetricResponseData,
    LogsMetricResponseFilter: LogsMetricResponseFilter,
    LogsMetricResponseGroupBy: LogsMetricResponseGroupBy,
    LogsMetricUpdateAttributes: LogsMetricUpdateAttributes,
    LogsMetricUpdateCompute: LogsMetricUpdateCompute,
    LogsMetricUpdateData: LogsMetricUpdateData,
    LogsMetricUpdateRequest: LogsMetricUpdateRequest,
    LogsMetricsResponse: LogsMetricsResponse,
  },
};
