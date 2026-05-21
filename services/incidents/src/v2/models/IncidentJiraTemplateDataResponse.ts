import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraTemplateDataAttributesResponse } from "./IncidentJiraTemplateDataAttributesResponse";
import { IncidentJiraTemplateRelationships } from "./IncidentJiraTemplateRelationships";
import { IncidentJiraTemplateType } from "./IncidentJiraTemplateType";

/**
 * Incident Jira template data in a response.
 */
export class IncidentJiraTemplateDataResponse {
  /**
   * Attributes of an incident Jira template.
   */
  "attributes": IncidentJiraTemplateDataAttributesResponse;
  /**
   * The template identifier.
   */
  "id": string;
  /**
   * Relationships for an incident Jira template.
   */
  "relationships"?: IncidentJiraTemplateRelationships;
  /**
   * Incident Jira template resource type.
   */
  "type": IncidentJiraTemplateType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentJiraTemplateDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentJiraTemplateRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentJiraTemplateType",
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
    return IncidentJiraTemplateDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
