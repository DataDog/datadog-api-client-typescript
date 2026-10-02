import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Publication status of the protocol.
 */
export type ExperimentsPublicProtocolResponseDataAttributesStatus =
  | typeof DRAFT
  | typeof PUBLISHED
  | typeof ARCHIVED
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const PUBLISHED = "PUBLISHED";
export const ARCHIVED = "ARCHIVED";
