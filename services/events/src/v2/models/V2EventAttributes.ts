import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { V2EventAttributesAttributes } from "./V2EventAttributesAttributes";

/**
 * Event attributes.
 */
export class V2EventAttributes {
  /**
   * JSON object for category-specific attributes.
   */
  "attributes"?: V2EventAttributesAttributes;
  /**
   * Free-form text associated with the event.
   */
  "message"?: string;
  /**
   * A list of tags associated with the event.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp when the event occurred.
   */
  "timestamp"?: string;
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
      type: "V2EventAttributesAttributes",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
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
    return V2EventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
