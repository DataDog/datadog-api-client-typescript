import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Configures which RUM events are processed and stored for the application.
 */
export type RUMEventProcessingState =
  | typeof ALL
  | typeof ERROR_FOCUSED_MODE
  | typeof NONE
  | UnparsedObject;
export const ALL = "ALL";
export const ERROR_FOCUSED_MODE = "ERROR_FOCUSED_MODE";
export const NONE = "NONE";
