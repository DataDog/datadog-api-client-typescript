import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current status of a content pack
 */
export type SecurityMonitoringContentPackStatus =
  | typeof INSTALL
  | typeof ACTIVATE
  | typeof INITIALIZING
  | typeof ACTIVE
  | typeof WARNING
  | typeof BROKEN
  | UnparsedObject;
export const INSTALL = "install";
export const ACTIVATE = "activate";
export const INITIALIZING = "initializing";
export const ACTIVE = "active";
export const WARNING = "warning";
export const BROKEN = "broken";
