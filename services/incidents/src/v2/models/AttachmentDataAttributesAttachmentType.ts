import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the attachment.
 */
export type AttachmentDataAttributesAttachmentType =
  | typeof POSTMORTEM
  | typeof LINK
  | UnparsedObject;
export const POSTMORTEM = "postmortem";
export const LINK = "link";
