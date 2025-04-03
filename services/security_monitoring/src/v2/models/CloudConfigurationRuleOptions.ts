import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudConfigurationComplianceRuleOptions } from "./CloudConfigurationComplianceRuleOptions";

/**
 * Options on cloud configuration rules.
 */
export class CloudConfigurationRuleOptions {
  /**
   * Options for cloud_configuration rules.
   * Fields `resourceType` and `regoRule` are mandatory when managing custom `cloud_configuration` rules.
   */
  "complianceRuleOptions": CloudConfigurationComplianceRuleOptions;
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
    complianceRuleOptions: {
      baseName: "complianceRuleOptions",
      type: "CloudConfigurationComplianceRuleOptions",
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
    return CloudConfigurationRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
