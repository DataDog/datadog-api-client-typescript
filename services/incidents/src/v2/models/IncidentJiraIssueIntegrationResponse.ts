import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraIssueIntegrationDataResponse } from "./IncidentJiraIssueIntegrationDataResponse";

/**
 * Response with Jira issue integration metadata.
 */
export class IncidentJiraIssueIntegrationResponse {
  /**
   * Jira issue integration data in a response.
   */
  "data": IncidentJiraIssueIntegrationDataResponse;
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
      type: "IncidentJiraIssueIntegrationDataResponse",
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
    return IncidentJiraIssueIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
