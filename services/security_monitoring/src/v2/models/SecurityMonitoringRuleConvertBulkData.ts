import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleConvertBulkAttributes } from "./SecurityMonitoringRuleConvertBulkAttributes";
import { SecurityMonitoringRuleConvertBulkDataType } from "./SecurityMonitoringRuleConvertBulkDataType";

/**
 * Data for bulk converting security monitoring rules to Terraform.
 */
export class SecurityMonitoringRuleConvertBulkData {
  /**
   * Attributes for bulk converting security monitoring rules to Terraform.
   */
  "attributes": SecurityMonitoringRuleConvertBulkAttributes;
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * The type of the resource.
   */
  "type": SecurityMonitoringRuleConvertBulkDataType;
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
      type: "SecurityMonitoringRuleConvertBulkAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleConvertBulkDataType",
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
    return SecurityMonitoringRuleConvertBulkData.attributeTypeMap;
  }

  public constructor() {}
}
