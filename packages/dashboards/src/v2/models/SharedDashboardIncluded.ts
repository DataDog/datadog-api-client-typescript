import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SharedDashboardIncludedDashboard } from "./SharedDashboardIncludedDashboard";
import { SharedDashboardIncludedUser } from "./SharedDashboardIncludedUser";

/**
 * Resource included with a shared dashboard.
 */
export type SharedDashboardIncluded =
  | SharedDashboardIncludedDashboard
  | SharedDashboardIncludedUser
  | UnparsedObject;
