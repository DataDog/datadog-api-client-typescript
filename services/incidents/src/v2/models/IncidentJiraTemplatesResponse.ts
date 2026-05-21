import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraTemplateDataResponse } from "./IncidentJiraTemplateDataResponse";

/**
 * Response with a list of incident Jira templates.
 */
export class IncidentJiraTemplatesResponse {
  /**
   * List of incident Jira templates.
   */
  "data": Array<IncidentJiraTemplateDataResponse>;
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
      type: "Array<IncidentJiraTemplateDataResponse>",
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
    return IncidentJiraTemplatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
