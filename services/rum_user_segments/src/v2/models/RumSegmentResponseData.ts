import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentResourceType } from "./RumSegmentResourceType";
import { RumSegmentResponseAttributes } from "./RumSegmentResponseAttributes";

/**
 * Data object for a segment in a response.
 */
export class RumSegmentResponseData {
  /**
   * Attributes of a segment in a response.
   */
  "attributes": RumSegmentResponseAttributes;
  /**
   * The unique identifier of the segment.
   */
  "id": string;
  /**
   * Type of the segment resource.
   */
  "type": RumSegmentResourceType;
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
      type: "RumSegmentResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumSegmentResourceType",
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
    return RumSegmentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
