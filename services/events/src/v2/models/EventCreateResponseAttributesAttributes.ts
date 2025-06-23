import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventCreateResponseAttributesAttributesEvt } from "./EventCreateResponseAttributesAttributesEvt";

/**
 * JSON object of attributes from your events.
 */
export class EventCreateResponseAttributesAttributes {
  /**
   * JSON object of event system attributes.
   */
  "evt"?: EventCreateResponseAttributesAttributesEvt;
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
    evt: {
      baseName: "evt",
      type: "EventCreateResponseAttributesAttributesEvt",
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
    return EventCreateResponseAttributesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
