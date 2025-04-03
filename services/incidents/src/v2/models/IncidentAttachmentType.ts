import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The incident attachment resource type.
 */
export type IncidentAttachmentType =
  | typeof INCIDENT_ATTACHMENTS
  | UnparsedObject;
export const INCIDENT_ATTACHMENTS = "incident_attachments";
