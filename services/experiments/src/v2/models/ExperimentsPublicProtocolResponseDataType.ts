import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Protocols resource type.
 */
export type ExperimentsPublicProtocolResponseDataType =
  | typeof PROTOCOLS
  | UnparsedObject;
export const PROTOCOLS = "protocols";
