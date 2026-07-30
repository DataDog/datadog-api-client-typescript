import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderRoleAssignmentRelationshipData } from "./IncidentResponderRoleAssignmentRelationshipData";

/**
 * Relationship to role assignments for a responder.
 */
export class IncidentResponderRoleAssignmentsRelationship {
  /**
   * List of role assignment relationship data.
   */
  "data"?: Array<IncidentResponderRoleAssignmentRelationshipData>;
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
      type: "Array<IncidentResponderRoleAssignmentRelationshipData>",
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
    return IncidentResponderRoleAssignmentsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
