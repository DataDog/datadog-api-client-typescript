import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentType } from "./RelationshipToIncidentType";

/**
 * Relationships for a Google Meet configuration create request.
 */
export class IncidentGoogleMeetConfigurationRelationshipsRequest {
  /**
   * Relationship to an incident type.
   */
  "incidentType": RelationshipToIncidentType;
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
      type: "RelationshipToIncidentType",
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
    return IncidentGoogleMeetConfigurationRelationshipsRequest.attributeTypeMap;
  }

  public constructor() {}
}
