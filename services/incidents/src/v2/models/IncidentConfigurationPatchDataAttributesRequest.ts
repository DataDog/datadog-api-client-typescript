import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for patching an incident configuration. All fields are optional.
 */
export class IncidentConfigurationPatchDataAttributesRequest {
  /**
   * Whether to execute integrations for this incident.
   */
  "executeIntegrations"?: boolean;
  /**
   * Whether to execute notification rules for this incident.
   */
  "executeNotificationRules"?: boolean;
  /**
   * Whether to include this incident in analytics.
   */
  "includeInAnalytics"?: boolean;
  /**
   * Whether to include this incident in search results.
   */
  "includeInSearch"?: boolean;
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
    executeIntegrations: {
      baseName: "execute_integrations",
      type: "boolean",
    },
    executeNotificationRules: {
      baseName: "execute_notification_rules",
      type: "boolean",
    },
    includeInAnalytics: {
      baseName: "include_in_analytics",
      type: "boolean",
    },
    includeInSearch: {
      baseName: "include_in_search",
      type: "boolean",
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
    return IncidentConfigurationPatchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
