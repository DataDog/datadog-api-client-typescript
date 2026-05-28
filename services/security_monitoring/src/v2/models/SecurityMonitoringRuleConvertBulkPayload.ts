import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleConvertBulkData } from "./SecurityMonitoringRuleConvertBulkData";

/**
 * Payload for bulk converting security monitoring rules to Terraform.
 */
export class SecurityMonitoringRuleConvertBulkPayload {
  /**
   * Data for bulk converting security monitoring rules to Terraform.
   */
  "data": SecurityMonitoringRuleConvertBulkData;
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
    data: {
      baseName: "data",
      type: "SecurityMonitoringRuleConvertBulkData",
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
    return SecurityMonitoringRuleConvertBulkPayload.attributeTypeMap;
  }

  public constructor() {}
}
