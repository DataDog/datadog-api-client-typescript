import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentTemplateResponseData } from "./RumSegmentTemplateResponseData";

/**
 * Response for listing segment templates.
 */
export class RumSegmentTemplateListResponse {
  /**
   * The list of segment templates.
   */
  "data": Array<RumSegmentTemplateResponseData>;
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
      type: "Array<RumSegmentTemplateResponseData>",
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
    return RumSegmentTemplateListResponse.attributeTypeMap;
  }

  public constructor() {}
}
