/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridDiscreteMode } from "./HeatgridDiscreteMode";
import { HeatgridPresetColorSource } from "./HeatgridPresetColorSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A preset discrete color palette.
 */
export class HeatgridDiscretePresetColor {
  /**
   * Use discrete color thresholds.
   */
  "mode": HeatgridDiscreteMode;
  /**
   * Name of the preset color palette.
   */
  "presetName": string;
  /**
   * Use a preset color palette.
   */
  "source": HeatgridPresetColorSource;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "HeatgridDiscreteMode",
      required: true,
    },
    presetName: {
      baseName: "preset_name",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridPresetColorSource",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDiscretePresetColor.attributeTypeMap;
  }

  public constructor() {}
}
