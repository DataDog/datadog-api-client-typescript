import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderRoleAssignmentsRelationship } from "./IncidentResponderRoleAssignmentsRelationship";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Relationships for an incident responder.
 */
export class IncidentResponderRelationships {
  /**
   * Relationship to user.
   */
  "createdBy"?: RelationshipToUser;
  /**
   * Relationship to user.
   */
  "lastModifiedBy"?: RelationshipToUser;
  /**
   * Relationship to role assignments for a responder.
   */
  "roleAssignments"?: IncidentResponderRoleAssignmentsRelationship;
  /**
   * Relationship to user.
   */
  "user"?: NullableRelationshipToUser;
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
      type: "RelationshipToUser",
    },
    lastModifiedBy: {
      baseName: "last_modified_by",
      type: "RelationshipToUser",
    },
    roleAssignments: {
      baseName: "role_assignments",
      type: "IncidentResponderRoleAssignmentsRelationship",
    },
    user: {
      baseName: "user",
      type: "NullableRelationshipToUser",
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
    return IncidentResponderRelationships.attributeTypeMap;
  }

  public constructor() {}
}
