import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestUserRelationship } from "./ChangeRequestUserRelationship";

/**
 * Relationships of a change request decision.
 */
export class ChangeRequestDecisionRelationships {
  /**
   * Relationship to a user.
   */
  "modifiedBy": ChangeRequestUserRelationship;
  /**
   * Relationship to a user.
   */
  "requestedByUser": ChangeRequestUserRelationship;
  /**
   * Relationship to a user.
   */
  "requestedUser": ChangeRequestUserRelationship;
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
    modifiedBy: {
      baseName: "modified_by",
      type: "ChangeRequestUserRelationship",
      required: true,
    },
    requestedByUser: {
      baseName: "requested_by_user",
      type: "ChangeRequestUserRelationship",
      required: true,
    },
    requestedUser: {
      baseName: "requested_user",
      type: "ChangeRequestUserRelationship",
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
    return ChangeRequestDecisionRelationships.attributeTypeMap;
  }

  public constructor() {}
}
