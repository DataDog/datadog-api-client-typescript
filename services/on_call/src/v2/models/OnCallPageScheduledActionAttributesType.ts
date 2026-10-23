import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of action that is scheduled.
 */
export type OnCallPageScheduledActionAttributesType =
  | typeof ESCALATE
  | typeof RESOLVE
  | typeof RELEASE
  | typeof RETRIGGER
  | UnparsedObject;
export const ESCALATE = "escalate";
export const RESOLVE = "resolve";
export const RELEASE = "release";
export const RETRIGGER = "retrigger";
