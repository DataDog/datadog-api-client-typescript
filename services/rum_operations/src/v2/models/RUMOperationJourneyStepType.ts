import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of a step within a RUM operation's journey.
 */
export type RUMOperationJourneyStepType =
  | typeof START
  | typeof UPDATE
  | typeof STOP
  | typeof ERROR
  | typeof ABANDONED
  | UnparsedObject;
export const START = "start";
export const UPDATE = "update";
export const STOP = "stop";
export const ERROR = "error";
export const ABANDONED = "abandoned";
