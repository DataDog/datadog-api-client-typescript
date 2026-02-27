import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentResourceType } from "./RumSegmentResourceType";
import { RumSegmentUpdateAttributes } from "./RumSegmentUpdateAttributes";

/**
 * Data object for a segment update request.
 */
export class RumSegmentUpdateData {
  /**
   * Attributes for updating a segment. All fields are optional.
   */
  "attributes": RumSegmentUpdateAttributes;
  /**
   * The identifier of the segment to update.
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
      type: "RumSegmentUpdateAttributes",
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
    return RumSegmentUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
