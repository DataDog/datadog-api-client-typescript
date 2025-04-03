import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of link attachment attributes.
 */
export type IncidentAttachmentLinkAttachmentType = typeof LINK | UnparsedObject;
export const LINK = "link";
