import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraTemplateIncidentTypeRelationshipData } from "./IncidentJiraTemplateIncidentTypeRelationshipData";

/**
 * Relationship to an incident type.
 */
export class IncidentJiraTemplateIncidentTypeRelationship {
  /**
   * Incident type relationship data.
   */
  "data": IncidentJiraTemplateIncidentTypeRelationshipData;
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
      type: "IncidentJiraTemplateIncidentTypeRelationshipData",
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
    return IncidentJiraTemplateIncidentTypeRelationship.attributeTypeMap;
  }

  public constructor() {}
}
