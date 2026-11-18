import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentPreviewAttributes } from "./SegmentPreviewAttributes";
import { SegmentPreviewRequestType } from "./SegmentPreviewRequestType";

/**
 * Data of the segment preview request.
 */
export class SegmentPreviewData {
  /**
   * Segment definition to preview and the columns to return.
   * Without columns, the response returns the user ID, or the account ID for account segments.
   */
  "attributes": SegmentPreviewAttributes;
  /**
   * Segment preview request resource type.
   */
  "type": SegmentPreviewRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "SegmentPreviewAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SegmentPreviewRequestType",
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
    return SegmentPreviewData.attributeTypeMap;
  }

  public constructor() {}
}
