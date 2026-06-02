import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRoleIncidentTypeRelationship } from "./IncidentUserDefinedRoleIncidentTypeRelationship";

/**
 * Relationships for creating a user-defined role.
 */
export class IncidentUserDefinedRoleRelationshipsRequest {
  /**
   * Relationship to an incident type for a user-defined role.
   */
  "incidentType": IncidentUserDefinedRoleIncidentTypeRelationship;
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
    incidentType: {
      baseName: "incident_type",
      type: "IncidentUserDefinedRoleIncidentTypeRelationship",
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
    return IncidentUserDefinedRoleRelationshipsRequest.attributeTypeMap;
  }

  public constructor() {}
}
