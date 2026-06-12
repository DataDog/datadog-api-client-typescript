import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of dashboard sharing.
 */
export type SharedDashboardShareType =
  | typeof OPEN
  | typeof INVITE
  | typeof EMBED
  | typeof SECURE_EMBED
  | UnparsedObject;
export const OPEN = "open";
export const INVITE = "invite";
export const EMBED = "embed";
export const SECURE_EMBED = "secure-embed";
