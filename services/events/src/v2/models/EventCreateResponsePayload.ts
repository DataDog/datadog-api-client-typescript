import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateResponse } from "./EventCreateResponse";
import { EventCreateResponsePayloadLinks } from "./EventCreateResponsePayloadLinks";

/**
 * Event creation response.
 */
export class EventCreateResponsePayload {
  /**
   * Event object.
   */
  "data"?: EventCreateResponse;
  /**
   * Links to the event.
   */
  "links"?: EventCreateResponsePayloadLinks;
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
      type: "EventCreateResponse",
    },
    links: {
      baseName: "links",
      type: "EventCreateResponsePayloadLinks",
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
    return EventCreateResponsePayload.attributeTypeMap;
  }

  public constructor() {}
}
