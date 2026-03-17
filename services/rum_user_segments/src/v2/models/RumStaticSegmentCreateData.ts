import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumStaticSegmentCreateAttributes } from "./RumStaticSegmentCreateAttributes";
import { RumStaticSegmentRequestType } from "./RumStaticSegmentRequestType";

/**
 * Data object for a static segment creation request.
 */
export class RumStaticSegmentCreateData {
  /**
   * Attributes for creating a new static segment.
   */
  "attributes": RumStaticSegmentCreateAttributes;
  /**
   * Type of the static segment creation request resource.
   */
  "type": RumStaticSegmentRequestType;
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
      type: "RumStaticSegmentCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumStaticSegmentRequestType",
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
    return RumStaticSegmentCreateData.attributeTypeMap;
  }

  public constructor() {}
}
