/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesWidgetAdvancedQueryRequest } from "./TimeseriesWidgetAdvancedQueryRequest";
import { TimeseriesWidgetApmRequest } from "./TimeseriesWidgetApmRequest";
import { TimeseriesWidgetAppsecSpanRequest } from "./TimeseriesWidgetAppsecSpanRequest";
import { TimeseriesWidgetAuditRequest } from "./TimeseriesWidgetAuditRequest";
import { TimeseriesWidgetCiPipelineRequest } from "./TimeseriesWidgetCiPipelineRequest";
import { TimeseriesWidgetCiTestRequest } from "./TimeseriesWidgetCiTestRequest";
import { TimeseriesWidgetComplianceFindingsRequest } from "./TimeseriesWidgetComplianceFindingsRequest";
import { TimeseriesWidgetDdsqlRequest } from "./TimeseriesWidgetDdsqlRequest";
import { TimeseriesWidgetEventRequest } from "./TimeseriesWidgetEventRequest";
import { TimeseriesWidgetFormulaRequest } from "./TimeseriesWidgetFormulaRequest";
import { TimeseriesWidgetLegacyEventRequest } from "./TimeseriesWidgetLegacyEventRequest";
import { TimeseriesWidgetLegacyProfileMetricsRequest } from "./TimeseriesWidgetLegacyProfileMetricsRequest";
import { TimeseriesWidgetLocalDatasetRequest } from "./TimeseriesWidgetLocalDatasetRequest";
import { TimeseriesWidgetLogRequest } from "./TimeseriesWidgetLogRequest";
import { TimeseriesWidgetMetricRequest } from "./TimeseriesWidgetMetricRequest";
import { TimeseriesWidgetNetworkRequest } from "./TimeseriesWidgetNetworkRequest";
import { TimeseriesWidgetProcessRequest } from "./TimeseriesWidgetProcessRequest";
import { TimeseriesWidgetProfilingMetricsRequest } from "./TimeseriesWidgetProfilingMetricsRequest";
import { TimeseriesWidgetRumRequest } from "./TimeseriesWidgetRumRequest";
import { TimeseriesWidgetSecurityRequest } from "./TimeseriesWidgetSecurityRequest";
import { TimeseriesWidgetSyntheticsBatchesRequest } from "./TimeseriesWidgetSyntheticsBatchesRequest";
import { TimeseriesWidgetSyntheticsTestRunsRequest } from "./TimeseriesWidgetSyntheticsTestRunsRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type TimeseriesWidgetRequest =
  | TimeseriesWidgetFormulaRequest
  | TimeseriesWidgetMetricRequest
  | TimeseriesWidgetLogRequest
  | TimeseriesWidgetApmRequest
  | TimeseriesWidgetNetworkRequest
  | TimeseriesWidgetRumRequest
  | TimeseriesWidgetSecurityRequest
  | TimeseriesWidgetComplianceFindingsRequest
  | TimeseriesWidgetEventRequest
  | TimeseriesWidgetProfilingMetricsRequest
  | TimeseriesWidgetCiPipelineRequest
  | TimeseriesWidgetCiTestRequest
  | TimeseriesWidgetAuditRequest
  | TimeseriesWidgetAppsecSpanRequest
  | TimeseriesWidgetSyntheticsBatchesRequest
  | TimeseriesWidgetSyntheticsTestRunsRequest
  | TimeseriesWidgetProcessRequest
  | TimeseriesWidgetLegacyProfileMetricsRequest
  | TimeseriesWidgetLegacyEventRequest
  | TimeseriesWidgetDdsqlRequest
  | TimeseriesWidgetAdvancedQueryRequest
  | TimeseriesWidgetLocalDatasetRequest
  | UnparsedObject;
