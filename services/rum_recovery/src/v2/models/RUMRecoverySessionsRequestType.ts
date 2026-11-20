import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Targeted recovery. Omitted request_type defaults to sessions.
 */
export type RUMRecoverySessionsRequestType = typeof SESSIONS | UnparsedObject;
export const SESSIONS = "sessions";
