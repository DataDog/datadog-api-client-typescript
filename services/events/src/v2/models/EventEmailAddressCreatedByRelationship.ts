import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressUserData } from "./EventEmailAddressUserData";

/**
 * Relationship to the user who created the email address.
 */
export class EventEmailAddressCreatedByRelationship {
  /**
   * A user data reference in a relationship.
   */
  "data": EventEmailAddressUserData;
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
      type: "EventEmailAddressUserData",
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
    return EventEmailAddressCreatedByRelationship.attributeTypeMap;
  }

  public constructor() {}
}
