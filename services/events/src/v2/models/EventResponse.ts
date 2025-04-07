import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventResponseAttributes } from "./EventResponseAttributes";
import { EventType } from "./EventType";

/**
 * The object description of an event after being processed and stored by Datadog.
 */
export class EventResponse {
  /**
   * The object description of an event response attribute.
   */
  "attributes"?: EventResponseAttributes;
  /**
   * the unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: EventType;
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
      type: "EventResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EventType",
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
    return EventResponse.attributeTypeMap;
  }

  public constructor() {}
}
