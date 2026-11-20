import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridBin } from "./HeatgridBin";
import { HeatgridDiscreteConfigAnyOfAnyOfItemMode } from "./HeatgridDiscreteConfigAnyOfAnyOfItemMode";
import { HeatgridDiscreteConfigAnyOfAnyOfItemSource } from "./HeatgridDiscreteConfigAnyOfAnyOfItemSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridDiscreteConfig20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "bins": Array<HeatgridBin>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": HeatgridDiscreteConfigAnyOfAnyOfItemMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source": HeatgridDiscreteConfigAnyOfAnyOfItemSource;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bins: {
      baseName: "bins",
      type: "Array<HeatgridBin>",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemMode",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemSource",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDiscreteConfig20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
