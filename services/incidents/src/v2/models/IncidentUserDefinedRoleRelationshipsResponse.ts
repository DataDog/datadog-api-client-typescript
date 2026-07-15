import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRoleIncidentTypeRelationship } from "./IncidentUserDefinedRoleIncidentTypeRelationship";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Relationships of a user-defined role response.
 */
export class IncidentUserDefinedRoleRelationshipsResponse {
  /**
   * Relationship to user.
   */
  "createdByUser"?: RelationshipToUser;
  /**
   * Relationship to an incident type for a user-defined role.
   */
  "incidentType"?: IncidentUserDefinedRoleIncidentTypeRelationship;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
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
    createdByUser: {
      baseName: "created_by_user",
      type: "RelationshipToUser",
    },
    incidentType: {
      baseName: "incident_type",
      type: "IncidentUserDefinedRoleIncidentTypeRelationship",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
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
    return IncidentUserDefinedRoleRelationshipsResponse.attributeTypeMap;
  }

  public constructor() {}
}
