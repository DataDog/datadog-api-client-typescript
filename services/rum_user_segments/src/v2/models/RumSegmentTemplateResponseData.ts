import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentTemplateResourceType } from "./RumSegmentTemplateResourceType";
import { RumSegmentTemplateResponseAttributes } from "./RumSegmentTemplateResponseAttributes";

/**
 * Data object for a segment template in a response.
 */
export class RumSegmentTemplateResponseData {
  /**
   * Attributes of a segment template in a response.
   */
  "attributes": RumSegmentTemplateResponseAttributes;
  /**
   * The unique identifier of the template.
   */
  "id": string;
  /**
   * Type of the segment template resource.
   */
  "type": RumSegmentTemplateResourceType;
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
      type: "RumSegmentTemplateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumSegmentTemplateResourceType",
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
    return RumSegmentTemplateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
