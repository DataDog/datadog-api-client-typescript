import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnitCustomType } from "./NumberFormatUnitCustomType";

/**
 * Custom unit.
 */
export class NumberFormatUnitCustom {
  /**
   * The label for the custom unit.
   */
  "label"?: string;
  /**
   * The type of custom unit.
   */
  "type"?: NumberFormatUnitCustomType;
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
    label: {
      baseName: "label",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NumberFormatUnitCustomType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberFormatUnitCustom.attributeTypeMap;
  }

  public constructor() {}
}
