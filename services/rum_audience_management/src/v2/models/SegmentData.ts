import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentAttributes } from "./SegmentAttributes";
import { SegmentResourceType } from "./SegmentResourceType";

/**
 * A segment.
 */
export class SegmentData {
  /**
   * Attributes of a segment.
   */
  "attributes": SegmentAttributes;
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
      type: "SegmentAttributes",
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
    return SegmentData.attributeTypeMap;
  }

  public constructor() {}
}
