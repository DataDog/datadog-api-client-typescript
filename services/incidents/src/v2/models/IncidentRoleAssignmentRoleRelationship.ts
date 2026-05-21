import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentRoleRelationshipData } from "./IncidentRoleAssignmentRoleRelationshipData";

/**
 * Relationship to a role.
 */
export class IncidentRoleAssignmentRoleRelationship {
  /**
   * Role relationship data.
   */
  "data"?: IncidentRoleAssignmentRoleRelationshipData;
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
      type: "IncidentRoleAssignmentRoleRelationshipData",
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
    return IncidentRoleAssignmentRoleRelationship.attributeTypeMap;
  }

  public constructor() {}
}
