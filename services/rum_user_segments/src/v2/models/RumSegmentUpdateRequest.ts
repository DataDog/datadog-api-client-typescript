import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentUpdateData } from "./RumSegmentUpdateData";

/**
 * Request body for updating a segment.
 */
export class RumSegmentUpdateRequest {
  /**
   * Data object for a segment update request.
   */
  "data": RumSegmentUpdateData;
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
      type: "RumSegmentUpdateData",
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
    return RumSegmentUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
