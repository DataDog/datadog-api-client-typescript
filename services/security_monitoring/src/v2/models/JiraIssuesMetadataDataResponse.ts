import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssuesMetadataDataAttributesResponse } from "./JiraIssuesMetadataDataAttributesResponse";
import { JiraIssuesMetadataType } from "./JiraIssuesMetadataType";

export class JiraIssuesMetadataDataResponse {
  "attributes": JiraIssuesMetadataDataAttributesResponse;
  /**
   * Jira issue URL.
   */
  "id": string;
  /**
   * Jira issues metadata resource type.
   */
  "type": JiraIssuesMetadataType;
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
      type: "JiraIssuesMetadataDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "JiraIssuesMetadataType",
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
    return JiraIssuesMetadataDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
