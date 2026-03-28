import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressCreatedByRelationship } from "./EventEmailAddressCreatedByRelationship";
import { EventEmailAddressRevokedByRelationship } from "./EventEmailAddressRevokedByRelationship";

/**
 * Relationships associated with an event email address resource.
 */
export class EventEmailAddressRelationships {
  /**
   * Relationship to the user who created the email address.
   */
  "createdBy": EventEmailAddressCreatedByRelationship;
  /**
   * Relationship to the user who revoked the email address.
   */
  "revokedBy"?: EventEmailAddressRevokedByRelationship;
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
      type: "EventEmailAddressCreatedByRelationship",
      required: true,
    },
    revokedBy: {
      baseName: "revoked_by",
      type: "EventEmailAddressRevokedByRelationship",
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
    return EventEmailAddressRelationships.attributeTypeMap;
  }

  public constructor() {}
}
