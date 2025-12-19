import { UnparsedObject } from "@datadog/datadog-api-client";
export type AttachmentDataAttributesAttachmentType =
  | typeof POSTMORTEM
  | typeof LINK
  | UnparsedObject;
export const POSTMORTEM = "postmortem";
export const LINK = "link";
