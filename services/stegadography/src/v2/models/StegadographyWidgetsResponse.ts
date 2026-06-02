import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StegadographyWidgetData } from "./StegadographyWidgetData";

/**
 * Response containing the widgets recovered from the uploaded image.
 */
export class StegadographyWidgetsResponse {
  /**
   * List of widgets matched to watermarks found in the image.
   */
  "data": Array<StegadographyWidgetData>;
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
      type: "Array<StegadographyWidgetData>",
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
    return StegadographyWidgetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
