import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentJiraIssueDataAttributesRequest } from "./IncidentJiraIssueDataAttributesRequest";
import { IncidentJiraIssueType } from "./IncidentJiraIssueType";

/**
 * Jira issue data for a request.
 */
export class IncidentJiraIssueDataRequest {
  /**
   * Attributes for creating a Jira issue from an incident.
   */
  "attributes": IncidentJiraIssueDataAttributesRequest;
  /**
   * Incident Jira issue resource type.
   */
  "type": IncidentJiraIssueType;
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
      type: "IncidentJiraIssueDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentJiraIssueType",
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
    return IncidentJiraIssueDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
