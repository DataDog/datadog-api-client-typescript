/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of Datadog resource linked to the case as contextual evidence. Each type corresponds to a different Datadog product signal (for example, a security finding, a monitor alert, or an incident).
 */

export type CaseInsightType =
  | typeof SECURITY_SIGNAL
  | typeof MONITOR
  | typeof EVENT_CORRELATION
  | typeof ERROR_TRACKING
  | typeof CLOUD_COST_RECOMMENDATION
  | typeof INCIDENT
  | typeof SENSITIVE_DATA_SCANNER_ISSUE
  | typeof EVENT
  | typeof WATCHDOG_STORY
  | typeof WIDGET
  | typeof SECURITY_FINDING
  | typeof INSIGHT_SCORECARD_CAMPAIGN
  | typeof RESOURCE_POLICY
  | typeof APM_RECOMMENDATION
  | typeof SCM_URL
  | typeof PROFILING_DOWNSIZING_EXPERIMENT
  | UnparsedObject;
export const SECURITY_SIGNAL = "SECURITY_SIGNAL";
export const MONITOR = "MONITOR";
export const EVENT_CORRELATION = "EVENT_CORRELATION";
export const ERROR_TRACKING = "ERROR_TRACKING";
export const CLOUD_COST_RECOMMENDATION = "CLOUD_COST_RECOMMENDATION";
export const INCIDENT = "INCIDENT";
export const SENSITIVE_DATA_SCANNER_ISSUE = "SENSITIVE_DATA_SCANNER_ISSUE";
export const EVENT = "EVENT";
export const WATCHDOG_STORY = "WATCHDOG_STORY";
export const WIDGET = "WIDGET";
export const SECURITY_FINDING = "SECURITY_FINDING";
export const INSIGHT_SCORECARD_CAMPAIGN = "INSIGHT_SCORECARD_CAMPAIGN";
export const RESOURCE_POLICY = "RESOURCE_POLICY";
export const APM_RECOMMENDATION = "APM_RECOMMENDATION";
export const SCM_URL = "SCM_URL";
export const PROFILING_DOWNSIZING_EXPERIMENT =
  "PROFILING_DOWNSIZING_EXPERIMENT";
