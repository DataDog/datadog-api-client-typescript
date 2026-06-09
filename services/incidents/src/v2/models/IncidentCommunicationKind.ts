import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of communication.
 */
export type IncidentCommunicationKind =
  | typeof MANUAL
  | typeof AUTOMATED
  | UnparsedObject;
export const MANUAL = "manual";
export const AUTOMATED = "automated";
