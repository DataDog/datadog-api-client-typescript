import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressRelationships } from "./EventEmailAddressRelationships";
import { EventEmailAddressResourceType } from "./EventEmailAddressResourceType";
import { EventEmailAddressResponseAttributes } from "./EventEmailAddressResponseAttributes";

/**
 * A single event email address resource.
 */
export class EventEmailAddressData {
  /**
   * Attributes of an event email address resource.
   */
  "attributes": EventEmailAddressResponseAttributes;
  /**
   * The UUID of the event email address.
   */
  "id": string;
  /**
   * Relationships associated with an event email address resource.
   */
  "relationships": EventEmailAddressRelationships;
  /**
   * The type of the resource. Must be `event_emails`.
   */
  "type": EventEmailAddressResourceType;
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
      type: "EventEmailAddressResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "EventEmailAddressRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventEmailAddressResourceType",
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
    return EventEmailAddressData.attributeTypeMap;
  }

  public constructor() {}
}
