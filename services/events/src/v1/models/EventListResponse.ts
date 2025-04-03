import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Event } from "./Event";

/**
 * An event list response.
 */
export class EventListResponse {
  /**
   * An array of events.
   */
  "events"?: Array<Event>;
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
    events: {
      baseName: "events",
      type: "Array<Event>",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventListResponse.attributeTypeMap;
  }

  public constructor() {}
}
