import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnitScaleType } from "./NumberFormatUnitScaleType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberFormatUnitScale {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NumberFormatUnitScaleType;
  /**
   * Datadog canonical unit identifier, for example byte or second.
   */
  "unitName"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "NumberFormatUnitScaleType",
      required: true,
    },
    unitName: {
      baseName: "unit_name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberFormatUnitScale.attributeTypeMap;
  }

  public constructor() {}
}
