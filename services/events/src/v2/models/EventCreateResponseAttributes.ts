import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateResponseAttributesAttributes } from "./EventCreateResponseAttributesAttributes";

/**
 * Event attributes.
 */
export class EventCreateResponseAttributes {
  /**
   * JSON object for category-specific attributes.
   */
  "attributes"?: EventCreateResponseAttributesAttributes;
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
      type: "EventCreateResponseAttributesAttributes",
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
    return EventCreateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
