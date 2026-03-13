import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentResponseData } from "./RumSegmentResponseData";

/**
 * Response containing a single segment.
 */
export class RumSegmentResponse {
  /**
   * Data object for a segment in a response.
   */
  "data": RumSegmentResponseData;
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
      type: "RumSegmentResponseData",
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
    return RumSegmentResponse.attributeTypeMap;
  }

  public constructor() {}
}
