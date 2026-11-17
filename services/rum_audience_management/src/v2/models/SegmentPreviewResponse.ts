import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentPreviewResponseData } from "./SegmentPreviewResponseData";

/**
 * Response containing a preview of the members of a segment.
 */
export class SegmentPreviewResponse {
  /**
   * Data of the segment preview response.
   */
  "data": SegmentPreviewResponseData;
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
      type: "SegmentPreviewResponseData",
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
    return SegmentPreviewResponse.attributeTypeMap;
  }

  public constructor() {}
}
