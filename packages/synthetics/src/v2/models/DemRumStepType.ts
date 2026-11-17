import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of a RUM journey step.
 */
export type DemRumStepType =
  | typeof START
  | typeof STOP
  | typeof STEP
  | UnparsedObject;
export const START = "start";
export const STOP = "stop";
export const STEP = "step";
