import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRoleIncidentTypeRelationshipData } from "./IncidentUserDefinedRoleIncidentTypeRelationshipData";

/**
 * Relationship to an incident type for a user-defined role.
 */
export class IncidentUserDefinedRoleIncidentTypeRelationship {
  /**
   * Data for the incident type relationship of a user-defined role.
   */
  "data": IncidentUserDefinedRoleIncidentTypeRelationshipData;
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
      type: "IncidentUserDefinedRoleIncidentTypeRelationshipData",
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
    return IncidentUserDefinedRoleIncidentTypeRelationship.attributeTypeMap;
  }

  public constructor() {}
}
