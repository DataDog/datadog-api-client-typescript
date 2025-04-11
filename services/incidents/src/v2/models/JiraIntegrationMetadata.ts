import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIntegrationMetadataIssuesItem } from "./JiraIntegrationMetadataIssuesItem";

/**
 * Incident integration metadata for the Jira integration.
 */
export class JiraIntegrationMetadata {
  /**
   * Array of Jira issues in this integration metadata.
   */
  "issues": Array<JiraIntegrationMetadataIssuesItem>;
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
    issues: {
      baseName: "issues",
      type: "Array<JiraIntegrationMetadataIssuesItem>",
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
    return JiraIntegrationMetadata.attributeTypeMap;
  }

  public constructor() {}
}
