import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StegadographyWidget } from "./StegadographyWidget";

/**
 * Response containing watermarked widgets recovered from an image.
 */
export class StegadographyGetWidgetsResponse {
  /**
   * List of watermarked widget resources recovered from an image.
   */
  "data": Array<StegadographyWidget>;
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
      type: "Array<StegadographyWidget>",
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
    return StegadographyGetWidgetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
