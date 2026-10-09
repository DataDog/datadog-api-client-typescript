/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridDiscreteCustomColor } from "./HeatgridDiscreteCustomColor";
import { HeatgridDiscretePresetColor } from "./HeatgridDiscretePresetColor";
import { HeatgridGradientCustomColor } from "./HeatgridGradientCustomColor";
import { HeatgridGradientPresetColor } from "./HeatgridGradientPresetColor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Color configuration for continuous gradients or discrete thresholds.
 */

export type HeatgridColorConfig =
  | HeatgridGradientCustomColor
  | HeatgridGradientPresetColor
  | HeatgridDiscreteCustomColor
  | HeatgridDiscretePresetColor
  | UnparsedObject;
