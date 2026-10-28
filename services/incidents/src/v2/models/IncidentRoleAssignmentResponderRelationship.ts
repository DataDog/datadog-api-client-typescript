import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentResponderRelationshipData } from "./IncidentRoleAssignmentResponderRelationshipData";

/**
 * Relationship to a responder.
 */
export class IncidentRoleAssignmentResponderRelationship {
  /**
   * Responder relationship data.
   */
  "data": IncidentRoleAssignmentResponderRelationshipData;
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
      type: "IncidentRoleAssignmentResponderRelationshipData",
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
    return IncidentRoleAssignmentResponderRelationship.attributeTypeMap;
  }

  public constructor() {}
}
