import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateRequest } from "./EventCreateRequest";

/**
 * Payload for creating an event.
 */
export class EventCreateRequestPayload {
  /**
   * Object representing an event creation request.
   */
  "data"?: EventCreateRequest;
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
    data: {
      baseName: "data",
      type: "EventCreateRequest",
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
    return EventCreateRequestPayload.attributeTypeMap;
  }

  public constructor() {}
}
