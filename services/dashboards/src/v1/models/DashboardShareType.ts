import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of sharing access (either open to anyone who has the public URL or invite-only).
 */
export type DashboardShareType =
  | typeof OPEN
  | typeof INVITE
  | typeof EMBED
  | UnparsedObject;
export const OPEN = "open";
export const INVITE = "invite";
export const EMBED = "embed";
