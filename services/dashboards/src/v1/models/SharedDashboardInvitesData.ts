import { UnparsedObject } from "@datadog/datadog-api-client";

import { SharedDashboardInvitesDataObject } from "./SharedDashboardInvitesDataObject";

/**
 * An object or list of objects containing the information for an invitation to a shared dashboard.
 */
export type SharedDashboardInvitesData =
  | SharedDashboardInvitesDataObject
  | Array<SharedDashboardInvitesDataObject>
  | UnparsedObject;
