import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnitCustomType } from "./NumberFormatUnitCustomType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberFormatUnitCustom {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NumberFormatUnitCustomType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "NumberFormatUnitCustomType",
      required: true,
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
