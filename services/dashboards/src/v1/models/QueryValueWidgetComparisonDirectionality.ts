import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Color-coding direction: `increase_better` (green on rise), `decrease_better` (green on drop), or `neutral` (no color).
 */
export type QueryValueWidgetComparisonDirectionality =
  | typeof INCREASE_BETTER
  | typeof DECREASE_BETTER
  | typeof NEUTRAL
  | UnparsedObject;
export const INCREASE_BETTER = "increase_better";
export const DECREASE_BETTER = "decrease_better";
export const NEUTRAL = "neutral";
