import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the attachment.
 */
export type AttachmentDataAttributesAttachmentType =
  | typeof POSTMORTEM
  | typeof LINK
  | UnparsedObject;
export const POSTMORTEM = "postmortem";
export const LINK = "link";
