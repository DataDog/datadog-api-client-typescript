import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressResponseDataRelationshipsUser } from "./EventEmailAddressResponseDataRelationshipsUser";

export class EventEmailAddressResponseDataRelationships {
  "createdBy": EventEmailAddressResponseDataRelationshipsUser;
  "revokedBy"?: EventEmailAddressResponseDataRelationshipsUser;
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
    createdBy: {
      baseName: "created_by",
      type: "EventEmailAddressResponseDataRelationshipsUser",
      required: true,
    },
    revokedBy: {
      baseName: "revoked_by",
      type: "EventEmailAddressResponseDataRelationshipsUser",
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
    return EventEmailAddressResponseDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
