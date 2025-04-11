import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateResponseAttributes } from "./EventCreateResponseAttributes";

/**
 * Object containing an event response.
 */
export class EventCreateResponse {
  /**
   * JSON object containing all events attributes and their associated values.
   */
  "attributes"?: EventCreateResponseAttributes;
  /**
   * Event type
   */
  "type"?: string;
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
      type: "EventCreateResponseAttributes",
    },
    type: {
      baseName: "type",
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
    return EventCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
