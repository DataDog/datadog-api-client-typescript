import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentType } from "./RelationshipToIncidentType";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Relationships of an incident user-defined field.
 */
export class IncidentUserDefinedFieldRelationships {
  /**
   * Relationship to user.
   */
  "createdByUser": RelationshipToUser;
  /**
   * Relationship to an incident type.
   */
  "incidentType": RelationshipToIncidentType;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser": RelationshipToUser;
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
      required: true,
    },
    incidentType: {
      baseName: "incident_type",
      type: "RelationshipToIncidentType",
      required: true,
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
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
    return IncidentUserDefinedFieldRelationships.attributeTypeMap;
  }

  public constructor() {}
}
