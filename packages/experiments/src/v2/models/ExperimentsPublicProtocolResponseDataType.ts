import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Protocols resource type.
 */
export type ExperimentsPublicProtocolResponseDataType =
  | typeof PROTOCOLS
  | UnparsedObject;
export const PROTOCOLS = "protocols";
