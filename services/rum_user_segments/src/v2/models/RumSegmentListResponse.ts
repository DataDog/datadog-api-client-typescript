import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentResponseData } from "./RumSegmentResponseData";

/**
 * Response for listing segments.
 */
export class RumSegmentListResponse {
  /**
   * The list of segments.
   */
  "data": Array<RumSegmentResponseData>;
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
      type: "Array<RumSegmentResponseData>",
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
    return RumSegmentListResponse.attributeTypeMap;
  }

  public constructor() {}
}
