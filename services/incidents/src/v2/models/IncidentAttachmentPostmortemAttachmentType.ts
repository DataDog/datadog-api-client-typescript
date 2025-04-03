import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of postmortem attachment attributes.
 */
export type IncidentAttachmentPostmortemAttachmentType =
  | typeof POSTMORTEM
  | UnparsedObject;
export const POSTMORTEM = "postmortem";
