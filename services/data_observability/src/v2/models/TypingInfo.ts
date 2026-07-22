import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GetDataObservabilityMonitorRunStatusResponse } from "./GetDataObservabilityMonitorRunStatusResponse";
import { GetDataObservabilityMonitorRunStatusResponseAttributes } from "./GetDataObservabilityMonitorRunStatusResponseAttributes";
import { GetDataObservabilityMonitorRunStatusResponseData } from "./GetDataObservabilityMonitorRunStatusResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RunDataObservabilityMonitorResponse } from "./RunDataObservabilityMonitorResponse";
import { RunDataObservabilityMonitorResponseData } from "./RunDataObservabilityMonitorResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DataObservabilityMonitorRunStatus: ["pending", "ok", "warn", "alert", "error"],
    DataObservabilityMonitorRunType: ["monitor_run"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GetDataObservabilityMonitorRunStatusResponse: GetDataObservabilityMonitorRunStatusResponse,
    GetDataObservabilityMonitorRunStatusResponseAttributes: GetDataObservabilityMonitorRunStatusResponseAttributes,
    GetDataObservabilityMonitorRunStatusResponseData: GetDataObservabilityMonitorRunStatusResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RunDataObservabilityMonitorResponse: RunDataObservabilityMonitorResponse,
    RunDataObservabilityMonitorResponseData: RunDataObservabilityMonitorResponseData,
  },
};