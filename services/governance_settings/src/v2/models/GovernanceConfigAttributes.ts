import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of a Governance Console configuration.
 */
export class GovernanceConfigAttributes {
  /**
   * Whether notifications are sent to users when detections are assigned to them.
   */
  "assignmentNotificationsEnabled": boolean;
  /**
   * Whether the Governance Console is enabled for the organization.
   */
  "enabled": boolean;
  /**
   * Whether usage attribution is configured for the organization.
   */
  "usageAttributionConfigured": boolean;
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
    assignmentNotificationsEnabled: {
      baseName: "assignment_notifications_enabled",
      type: "boolean",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    usageAttributionConfigured: {
      baseName: "usage_attribution_configured",
      type: "boolean",
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
    return GovernanceConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
