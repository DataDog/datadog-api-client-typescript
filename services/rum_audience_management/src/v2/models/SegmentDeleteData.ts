import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentDeleteAttributes } from "./SegmentDeleteAttributes";
import { SegmentDeletedType } from "./SegmentDeletedType";

/**
 * A deleted segment.
 */
export class SegmentDeleteData {
  /**
   * Attributes of a deleted segment.
   */
  "attributes": SegmentDeleteAttributes;
  /**
   * ID of the segment.
   */
  "id": string;
  /**
   * Deleted segment resource type.
   */
  "type": SegmentDeletedType;
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
      type: "SegmentDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SegmentDeletedType",
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
    return SegmentDeleteData.attributeTypeMap;
  }

  public constructor() {}
}
