import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentPreviewData } from "./SegmentPreviewData";

/**
 * Request to preview the members of a segment definition.
 */
export class SegmentPreviewRequest {
  /**
   * Data of the segment preview request.
   */
  "data": SegmentPreviewData;
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
      type: "SegmentPreviewData",
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
    return SegmentPreviewRequest.attributeTypeMap;
  }

  public constructor() {}
}
