import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetData } from "./WidgetData";
import { WidgetIncludedUser } from "./WidgetIncludedUser";

/**
 * Response containing a single widget.
 */
export class WidgetResponse {
  /**
   * A widget resource object.
   */
  "data": WidgetData;
  /**
   * Array of user resources related to the widget.
   */
  "included"?: Array<WidgetIncludedUser>;
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
    data: {
      baseName: "data",
      type: "WidgetData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<WidgetIncludedUser>",
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
    return WidgetResponse.attributeTypeMap;
  }

  public constructor() {}
}
