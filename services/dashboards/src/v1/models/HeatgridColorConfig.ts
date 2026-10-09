import { UnparsedObject } from "@datadog/datadog-api-client";

import { HeatgridDiscreteCustomColor } from "./HeatgridDiscreteCustomColor";
import { HeatgridDiscretePresetColor } from "./HeatgridDiscretePresetColor";
import { HeatgridGradientCustomColor } from "./HeatgridGradientCustomColor";
import { HeatgridGradientPresetColor } from "./HeatgridGradientPresetColor";

/**
 * Color configuration for continuous gradients or discrete thresholds.
 */
export type HeatgridColorConfig =
  | HeatgridGradientCustomColor
  | HeatgridGradientPresetColor
  | HeatgridDiscreteCustomColor
  | HeatgridDiscretePresetColor
  | UnparsedObject;
