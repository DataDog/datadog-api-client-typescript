import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentResourceType } from "./SegmentResourceType";
import { SegmentUpdateAttributes } from "./SegmentUpdateAttributes";

/**
 * Data of the segment update.
 */
export class SegmentUpdateData {
  /**
   * Attributes to update on a segment. Fields that are not set are left unchanged.
   */
  "attributes": SegmentUpdateAttributes;
  /**
   * ID of the segment. It must match the ID in the path.
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
      type: "SegmentUpdateAttributes",
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
    return SegmentUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
