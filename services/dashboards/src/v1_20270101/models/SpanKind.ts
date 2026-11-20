import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SpanKind =
  | typeof CONSUMER
  | typeof SERVER
  | typeof CLIENT
  | typeof PRODUCER
  | typeof INTERNAL
  | UnparsedObject;
export const CONSUMER = "consumer";
export const SERVER = "server";
export const CLIENT = "client";
export const PRODUCER = "producer";
export const INTERNAL = "internal";
