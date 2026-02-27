import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressResourceType } from "./EventEmailAddressResourceType";
import { EventEmailAddressUpdateAttributes } from "./EventEmailAddressUpdateAttributes";

/**
 * Data for updating an event email address.
 */
export class EventEmailAddressUpdateData {
  /**
   * Attributes for updating an event email address.
   */
  "attributes": EventEmailAddressUpdateAttributes;
  /**
   * The type of the resource. Must be `event_emails`.
   */
  "type"?: EventEmailAddressResourceType;
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
      type: "EventEmailAddressUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventEmailAddressResourceType",
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
    return EventEmailAddressUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
