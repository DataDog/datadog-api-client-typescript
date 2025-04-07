import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The object related to an incident attachment.
 */
export type IncidentAttachmentRelatedObject = typeof USERS | UnparsedObject;
export const USERS = "users";
