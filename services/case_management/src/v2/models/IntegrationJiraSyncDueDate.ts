import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Due date synchronization configuration for Jira integration
 */
export class IntegrationJiraSyncDueDate {
  /**
   * The Jira field identifier used to store the due date
   */
  "jiraFieldId"?: string;
  /**
   * The type of synchronization to apply for the due date field
   */
  "syncType"?: string;
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
    jiraFieldId: {
      baseName: "jira_field_id",
      type: "string",
    },
    syncType: {
      baseName: "sync_type",
      type: "string",
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
    return IntegrationJiraSyncDueDate.attributeTypeMap;
  }

  public constructor() {}
}
