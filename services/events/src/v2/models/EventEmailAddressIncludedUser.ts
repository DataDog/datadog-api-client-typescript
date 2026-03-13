import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressIncludedUserAttributes } from "./EventEmailAddressIncludedUserAttributes";

/**
 * An included user resource in an event email address response.
 */
export class EventEmailAddressIncludedUser {
  /**
   * Attributes of an included user resource.
   */
  "attributes": EventEmailAddressIncludedUserAttributes;
  /**
   * The UUID of the user.
   */
  "id": string;
  /**
   * The type of the resource.
   */
  "type": string;
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
      type: "EventEmailAddressIncludedUserAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return EventEmailAddressIncludedUser.attributeTypeMap;
  }

  public constructor() {}
}
