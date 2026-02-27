import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentDeleteAttributes } from "./RumSegmentDeleteAttributes";
import { RumSegmentDeleteType } from "./RumSegmentDeleteType";

/**
 * Data object for a deleted segment response.
 */
export class RumSegmentDeleteData {
  /**
   * Attributes of a deleted segment response.
   */
  "attributes": RumSegmentDeleteAttributes;
  /**
   * Unique identifier for the deleted segment.
   */
  "id": string;
  /**
   * Type of the deleted segment resource.
   */
  "type": RumSegmentDeleteType;
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
      type: "RumSegmentDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumSegmentDeleteType",
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
    return RumSegmentDeleteData.attributeTypeMap;
  }

  public constructor() {}
}
