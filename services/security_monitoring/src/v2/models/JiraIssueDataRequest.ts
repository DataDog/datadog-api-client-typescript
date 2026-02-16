import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueDataAttributesRequest } from "./JiraIssueDataAttributesRequest";
import { JiraIssueDataMeta } from "./JiraIssueDataMeta";
import { JiraIssueType } from "./JiraIssueType";

export class JiraIssueDataRequest {
  "attributes": JiraIssueDataAttributesRequest;
  /**
   * Unique identifier of the Jira issue request.
   */
  "id": string;
  "meta": JiraIssueDataMeta;
  /**
   * Jira issue resource type.
   */
  "type": JiraIssueType;
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
      type: "JiraIssueDataAttributesRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "JiraIssueDataMeta",
      required: true,
    },
    type: {
      baseName: "type",
      type: "JiraIssueType",
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
    return JiraIssueDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
