import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentResponderRelationship } from "./IncidentRoleAssignmentResponderRelationship";
import { IncidentRoleAssignmentRoleRelationship } from "./IncidentRoleAssignmentRoleRelationship";

/**
 * Relationships for creating a role assignment.
 */
export class IncidentRoleAssignmentRelationshipsRequest {
  /**
   * Relationship to a role.
   */
  "reservedRole"?: IncidentRoleAssignmentRoleRelationship;
  /**
   * Relationship to a responder.
   */
  "responder": IncidentRoleAssignmentResponderRelationship;
  /**
   * Relationship to a role.
   */
  "userDefinedRole"?: IncidentRoleAssignmentRoleRelationship;
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
    reservedRole: {
      baseName: "reserved_role",
      type: "IncidentRoleAssignmentRoleRelationship",
    },
    responder: {
      baseName: "responder",
      type: "IncidentRoleAssignmentResponderRelationship",
      required: true,
    },
    userDefinedRole: {
      baseName: "user_defined_role",
      type: "IncidentRoleAssignmentRoleRelationship",
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
    return IncidentRoleAssignmentRelationshipsRequest.attributeTypeMap;
  }

  public constructor() {}
}
