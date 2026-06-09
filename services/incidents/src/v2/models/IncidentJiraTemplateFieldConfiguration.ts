import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for a Jira field mapping.
 */
export class IncidentJiraTemplateFieldConfiguration {
  /**
   * Custom value for outbound synchronization.
   */
  "customOutboundValue"?: any;
  /**
   * The incident field to map to.
   */
  "incidentField"?: string;
  /**
   * The Jira field key.
   */
  "jiraFieldKey": string;
  /**
   * The type of the Jira field.
   */
  "jiraFieldType"?: string;
  /**
   * The direction of synchronization.
   */
  "syncDirection": string;
  /**
   * Mapping of values between incident and Jira fields.
   */
  "valueMapping"?: { [key: string]: string };
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
    customOutboundValue: {
      baseName: "custom_outbound_value",
      type: "any",
    },
    incidentField: {
      baseName: "incident_field",
      type: "string",
    },
    jiraFieldKey: {
      baseName: "jira_field_key",
      type: "string",
      required: true,
    },
    jiraFieldType: {
      baseName: "jira_field_type",
      type: "string",
    },
    syncDirection: {
      baseName: "sync_direction",
      type: "string",
      required: true,
    },
    valueMapping: {
      baseName: "value_mapping",
      type: "{ [key: string]: string; }",
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
    return IncidentJiraTemplateFieldConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
