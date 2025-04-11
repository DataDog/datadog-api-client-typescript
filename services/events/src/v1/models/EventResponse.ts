import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Event } from "./Event";

/**
 * Object containing an event response.
 */
export class EventResponse {
  /**
   * Object representing an event.
   */
  "event"?: Event;
  /**
   * A status.
   */
  "status"?: string;
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
    event: {
      baseName: "event",
      type: "Event",
    },
    status: {
      baseName: "status",
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
    return EventResponse.attributeTypeMap;
  }

  public constructor() {}
}
