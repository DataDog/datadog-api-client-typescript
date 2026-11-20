import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RUMMetricCompute } from "./RUMMetricCompute";
import { RUMMetricCreateAttributes } from "./RUMMetricCreateAttributes";
import { RUMMetricCreateData } from "./RUMMetricCreateData";
import { RUMMetricCreateRequest } from "./RUMMetricCreateRequest";
import { RUMMetricFilter } from "./RUMMetricFilter";
import { RUMMetricGroupBy } from "./RUMMetricGroupBy";
import { RUMMetricResponse } from "./RUMMetricResponse";
import { RUMMetricResponseAttributes } from "./RUMMetricResponseAttributes";
import { RUMMetricResponseCompute } from "./RUMMetricResponseCompute";
import { RUMMetricResponseData } from "./RUMMetricResponseData";
import { RUMMetricResponseFilter } from "./RUMMetricResponseFilter";
import { RUMMetricResponseGroupBy } from "./RUMMetricResponseGroupBy";
import { RUMMetricResponseUniqueness } from "./RUMMetricResponseUniqueness";
import { RUMMetricUniqueness } from "./RUMMetricUniqueness";
import { RUMMetricUpdateAttributes } from "./RUMMetricUpdateAttributes";
import { RUMMetricUpdateCompute } from "./RUMMetricUpdateCompute";
import { RUMMetricUpdateData } from "./RUMMetricUpdateData";
import { RUMMetricUpdateRequest } from "./RUMMetricUpdateRequest";
import { RUMMetricsResponse } from "./RUMMetricsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMMetricComputeAggregationType: ["count", "distribution"],
    RUMMetricEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RUMMetricType: ["rum_metrics"],
    RUMMetricUniquenessWhen: ["match", "end"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RUMMetricCompute: RUMMetricCompute,
    RUMMetricCreateAttributes: RUMMetricCreateAttributes,
    RUMMetricCreateData: RUMMetricCreateData,
    RUMMetricCreateRequest: RUMMetricCreateRequest,
    RUMMetricFilter: RUMMetricFilter,
    RUMMetricGroupBy: RUMMetricGroupBy,
    RUMMetricResponse: RUMMetricResponse,
    RUMMetricResponseAttributes: RUMMetricResponseAttributes,
    RUMMetricResponseCompute: RUMMetricResponseCompute,
    RUMMetricResponseData: RUMMetricResponseData,
    RUMMetricResponseFilter: RUMMetricResponseFilter,
    RUMMetricResponseGroupBy: RUMMetricResponseGroupBy,
    RUMMetricResponseUniqueness: RUMMetricResponseUniqueness,
    RUMMetricUniqueness: RUMMetricUniqueness,
    RUMMetricUpdateAttributes: RUMMetricUpdateAttributes,
    RUMMetricUpdateCompute: RUMMetricUpdateCompute,
    RUMMetricUpdateData: RUMMetricUpdateData,
    RUMMetricUpdateRequest: RUMMetricUpdateRequest,
    RUMMetricsResponse: RUMMetricsResponse,
  },
};
