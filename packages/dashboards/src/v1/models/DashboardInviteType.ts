import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type for shared dashboard invitation request body.
 */
export type DashboardInviteType =
  | typeof PUBLIC_DASHBOARD_INVITATION
  | UnparsedObject;
export const PUBLIC_DASHBOARD_INVITATION = "public_dashboard_invitation";
