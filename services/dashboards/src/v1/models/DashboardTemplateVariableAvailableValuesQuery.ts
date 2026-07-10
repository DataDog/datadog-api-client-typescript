import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardAvailableValuesEventsQuery } from "./DashboardAvailableValuesEventsQuery";
import { DashboardAvailableValuesMetricsQuery } from "./DashboardAvailableValuesMetricsQuery";

/**
 * A query that dynamically computes the list of values available for this template variable.
 */
export type DashboardTemplateVariableAvailableValuesQuery =
  | DashboardAvailableValuesEventsQuery
  | DashboardAvailableValuesMetricsQuery
  | UnparsedObject;
