import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentCreateData } from "./RumSegmentCreateData";

/**
 * Request body for creating a new segment.
 */
export class RumSegmentCreateRequest {
  /**
   * Data object for a segment creation request.
   */
  "data": RumSegmentCreateData;
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
      type: "RumSegmentCreateData",
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
    return RumSegmentCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
