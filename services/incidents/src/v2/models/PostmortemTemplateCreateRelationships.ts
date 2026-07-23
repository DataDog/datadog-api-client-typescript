import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateIncidentTypeRelationship } from "./PostmortemTemplateIncidentTypeRelationship";

/**
 * Relationships for a postmortem template. `incident_type` is required when creating a template and is immutable afterwards.
 */
export class PostmortemTemplateCreateRelationships {
  /**
   * Relationship to the incident type this template belongs to.
   */
  "incidentType"?: PostmortemTemplateIncidentTypeRelationship;
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
      type: "PostmortemTemplateIncidentTypeRelationship",
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
    return PostmortemTemplateCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
