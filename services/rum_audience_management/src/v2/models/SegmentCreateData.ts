import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentCreateAttributes } from "./SegmentCreateAttributes";
import { SegmentResourceType } from "./SegmentResourceType";

/**
 * Data of the segment to create.
 */
export class SegmentCreateData {
  /**
   * Attributes of the segment to create.
   */
  "attributes": SegmentCreateAttributes;
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
      type: "SegmentCreateAttributes",
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
    return SegmentCreateData.attributeTypeMap;
  }

  public constructor() {}
}
