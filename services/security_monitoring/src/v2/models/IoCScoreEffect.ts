import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Effect of a scoring factor on the indicator's threat score.
 */
export type IoCScoreEffect =
  | typeof RAISE_SCORE
  | typeof LOWER_SCORE
  | typeof NO_EFFECT
  | UnparsedObject;
export const RAISE_SCORE = "RAISE_SCORE";
export const LOWER_SCORE = "LOWER_SCORE";
export const NO_EFFECT = "NO_EFFECT";
