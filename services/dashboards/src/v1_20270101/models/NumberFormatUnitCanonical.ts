import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnitCanonicalType } from "./NumberFormatUnitCanonicalType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberFormatUnitCanonical {
  /**
   * Datadog canonical unit identifier, for example byte or second.
   */
  "perUnitName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NumberFormatUnitCanonicalType;
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
    perUnitName: {
      baseName: "per_unit_name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NumberFormatUnitCanonicalType",
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
    return NumberFormatUnitCanonical.attributeTypeMap;
  }

  public constructor() {}
}
