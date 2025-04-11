import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ToplistWidgetFlatType } from "./ToplistWidgetFlatType";

/**
 * Top list widget flat display.
 */
export class ToplistWidgetFlat {
  /**
   * Top list widget flat display type.
   */
  "type": ToplistWidgetFlatType;
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
      type: "ToplistWidgetFlatType",
      required: true,
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
    return ToplistWidgetFlat.attributeTypeMap;
  }

  public constructor() {}
}
