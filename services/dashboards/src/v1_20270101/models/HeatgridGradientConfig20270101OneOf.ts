import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridGradientConfigAnyOfAnyOfItemMode } from "./HeatgridGradientConfigAnyOfAnyOfItemMode";
import { HeatgridGradientConfigAnyOfAnyOfItemSource } from "./HeatgridGradientConfigAnyOfAnyOfItemSource";
import { HeatgridStop } from "./HeatgridStop";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridGradientConfig20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": HeatgridGradientConfigAnyOfAnyOfItemMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source": HeatgridGradientConfigAnyOfAnyOfItemSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stops": Array<HeatgridStop>;
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
      type: "HeatgridGradientConfigAnyOfAnyOfItemMode",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridGradientConfigAnyOfAnyOfItemSource",
      required: true,
    },
    stops: {
      baseName: "stops",
      type: "Array<HeatgridStop>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridGradientConfig20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
