import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnitScaleType } from "./NumberFormatUnitScaleType";

/**
 * The definition of `NumberFormatUnitScale` object.
 */
export class NumberFormatUnitScale {
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
    return NumberFormatUnitScale.attributeTypeMap;
  }

  public constructor() {}
}
