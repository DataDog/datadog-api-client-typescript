import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the incident attachment attributes.
 */
export type IncidentAttachmentAttachmentType =
  | typeof LINK
  | typeof POSTMORTEM
  | UnparsedObject;
export const LINK = "link";
export const POSTMORTEM = "postmortem";
