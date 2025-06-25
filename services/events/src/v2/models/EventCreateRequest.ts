import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateRequestType } from "./EventCreateRequestType";
import { EventPayload } from "./EventPayload";

/**
 * An event object.
 */
export class EventCreateRequest {
  /**
   * Event attributes.
   */
  "attributes": EventPayload;
  /**
   * Entity type.
   */
  "type": EventCreateRequestType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventCreateRequestType",
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
    return EventCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
