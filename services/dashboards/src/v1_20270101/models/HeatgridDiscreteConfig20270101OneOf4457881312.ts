import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848 } from "./HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848";
import { HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168 } from "./HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168";
import { HeatgridPresetName } from "./HeatgridPresetName";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridDiscreteConfig20270101OneOf4457881312 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "presetName": HeatgridPresetName;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source": HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168;
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
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848",
      required: true,
    },
    presetName: {
      baseName: "preset_name",
      type: "HeatgridPresetName",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDiscreteConfig20270101OneOf4457881312.attributeTypeMap;
  }

  public constructor() {}
}
