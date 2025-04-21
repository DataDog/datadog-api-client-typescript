import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumMetricCompute } from "./RumMetricCompute";
import { RumMetricCreateAttributes } from "./RumMetricCreateAttributes";
import { RumMetricCreateData } from "./RumMetricCreateData";
import { RumMetricCreateRequest } from "./RumMetricCreateRequest";
import { RumMetricFilter } from "./RumMetricFilter";
import { RumMetricGroupBy } from "./RumMetricGroupBy";
import { RumMetricResponse } from "./RumMetricResponse";
import { RumMetricResponseAttributes } from "./RumMetricResponseAttributes";
import { RumMetricResponseCompute } from "./RumMetricResponseCompute";
import { RumMetricResponseData } from "./RumMetricResponseData";
import { RumMetricResponseFilter } from "./RumMetricResponseFilter";
import { RumMetricResponseGroupBy } from "./RumMetricResponseGroupBy";
import { RumMetricResponseUniqueness } from "./RumMetricResponseUniqueness";
import { RumMetricUniqueness } from "./RumMetricUniqueness";
import { RumMetricUpdateAttributes } from "./RumMetricUpdateAttributes";
import { RumMetricUpdateCompute } from "./RumMetricUpdateCompute";
import { RumMetricUpdateData } from "./RumMetricUpdateData";
import { RumMetricUpdateRequest } from "./RumMetricUpdateRequest";
import { RumMetricsResponse } from "./RumMetricsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumMetricComputeAggregationType: ["count", "distribution"],
    RumMetricEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumMetricType: ["rum_metrics"],
    RumMetricUniquenessWhen: ["match", "end"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RumMetricCompute: RumMetricCompute,
    RumMetricCreateAttributes: RumMetricCreateAttributes,
    RumMetricCreateData: RumMetricCreateData,
    RumMetricCreateRequest: RumMetricCreateRequest,
    RumMetricFilter: RumMetricFilter,
    RumMetricGroupBy: RumMetricGroupBy,
    RumMetricResponse: RumMetricResponse,
    RumMetricResponseAttributes: RumMetricResponseAttributes,
    RumMetricResponseCompute: RumMetricResponseCompute,
    RumMetricResponseData: RumMetricResponseData,
    RumMetricResponseFilter: RumMetricResponseFilter,
    RumMetricResponseGroupBy: RumMetricResponseGroupBy,
    RumMetricResponseUniqueness: RumMetricResponseUniqueness,
    RumMetricUniqueness: RumMetricUniqueness,
    RumMetricUpdateAttributes: RumMetricUpdateAttributes,
    RumMetricUpdateCompute: RumMetricUpdateCompute,
    RumMetricUpdateData: RumMetricUpdateData,
    RumMetricUpdateRequest: RumMetricUpdateRequest,
    RumMetricsResponse: RumMetricsResponse,
  },
};
