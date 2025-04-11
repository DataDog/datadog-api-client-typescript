import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnitScaleType } from "./NumberFormatUnitScaleType";

/**
 * Canonical unit.
 */
export class NumberFormatUnitCanonical {
  /**
   * The name of the unit per item.
   */
  "perUnitName"?: string;
  /**
   * The type of unit scale.
   */
  "type"?: NumberFormatUnitScaleType;
  /**
   * The name of the unit.
   */
  "unitName"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "NumberFormatUnitScaleType",
    },
    unitName: {
      baseName: "unit_name",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
