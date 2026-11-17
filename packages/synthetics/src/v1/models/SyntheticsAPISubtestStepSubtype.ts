import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The subtype of the Synthetic multi-step API subtest step.
 */
export type SyntheticsAPISubtestStepSubtype =
  | typeof PLAY_SUB_TEST
  | UnparsedObject;
export const PLAY_SUB_TEST = "playSubTest";
