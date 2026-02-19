import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestUserRelationship } from "./ChangeRequestUserRelationship";

/**
 * Relationships for creating a change request decision.
 */
export class ChangeRequestDecisionCreateRelationships {
  /**
   * Relationship to a user.
   */
  "requestedUser"?: ChangeRequestUserRelationship;
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
    requestedUser: {
      baseName: "requested_user",
      type: "ChangeRequestUserRelationship",
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
    return ChangeRequestDecisionCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
