import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraTemplateDataRequest } from "./IncidentJiraTemplateDataRequest";

/**
 * Create or update request for an incident Jira template.
 */
export class IncidentJiraTemplateRequest {
  /**
   * Incident Jira template data for a create or update request.
   */
  "data": IncidentJiraTemplateDataRequest;
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
      type: "IncidentJiraTemplateDataRequest",
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
    return IncidentJiraTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
