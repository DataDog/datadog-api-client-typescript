import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateRequestType } from "./EventCreateRequestType";
import { EventPayload } from "./EventPayload";

/**
 * Object representing an event creation request.
 */
export class EventCreateRequest {
  /**
   * Event attributes.
   */
  "attributes"?: EventPayload;
  /**
   * Entity type.
   */
  "type"?: EventCreateRequestType;
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
      type: "EventPayload",
    },
    type: {
      baseName: "type",
      type: "EventCreateRequestType",
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
    return EventCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
