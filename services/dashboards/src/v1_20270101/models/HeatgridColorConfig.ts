import { UnparsedObject } from "@datadog/datadog-api-client";

import { HeatgridDiscreteConfig } from "./HeatgridDiscreteConfig";
import { HeatgridGradientConfig } from "./HeatgridGradientConfig";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HeatgridColorConfig =
  | HeatgridGradientConfig
  | HeatgridDiscreteConfig
  | UnparsedObject;
