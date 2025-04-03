import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

/**
 * Description of signals.
 */
export class CloudConfigurationRuleCaseCreate {
  /**
   * Notification targets for each rule case.
   */
  "notifications"?: Array<string>;
  /**
   * Severity of the Security Signal.
   */
  "status": SecurityMonitoringRuleSeverity;
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
    notifications: {
      baseName: "notifications",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringRuleSeverity",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationRuleCaseCreate.attributeTypeMap;
  }

  public constructor() {}
}
