import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraIssueIntegrationDataAttributes } from "./IncidentJiraIssueIntegrationDataAttributes";
import { IncidentJiraIssueIntegrationType } from "./IncidentJiraIssueIntegrationType";

/**
 * Jira issue integration data in a response.
 */
export class IncidentJiraIssueIntegrationDataResponse {
  /**
   * Attributes of a Jira issue integration.
   */
  "attributes": IncidentJiraIssueIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Incident integration resource type.
   */
  "type": IncidentJiraIssueIntegrationType;
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
      type: "IncidentJiraIssueIntegrationDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentJiraIssueIntegrationType",
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
    return IncidentJiraIssueIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
