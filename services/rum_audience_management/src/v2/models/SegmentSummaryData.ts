import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentResourceType } from "./SegmentResourceType";
import { SegmentSummaryAttributes } from "./SegmentSummaryAttributes";

/**
 * A segment in a list.
 */
export class SegmentSummaryData {
  /**
   * Attributes of a segment in a list. The segment definition is not included.
   */
  "attributes": SegmentSummaryAttributes;
  /**
   * ID of the segment.
   */
  "id": string;
  /**
   * Segment resource type.
   */
  "type": SegmentResourceType;
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
      type: "SegmentSummaryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SegmentResourceType",
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
    return SegmentSummaryData.attributeTypeMap;
  }

  public constructor() {}
}
