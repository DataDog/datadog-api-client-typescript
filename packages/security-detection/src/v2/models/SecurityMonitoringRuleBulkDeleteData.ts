import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { SecurityMonitoringRuleBulkDeleteAttributes } from "./SecurityMonitoringRuleBulkDeleteAttributes";
import { SecurityMonitoringRuleBulkDeleteRequestDataType } from "./SecurityMonitoringRuleBulkDeleteRequestDataType";

/**
 * Data for bulk deleting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkDeleteData {
  /**
   * Attributes for bulk deleting security monitoring rules.
   */
  "attributes": SecurityMonitoringRuleBulkDeleteAttributes;
  /**
   * Request ID. This value is echoed back as the response's resource ID.
   */
  "id"?: string;
  /**
   * The resource type for a bulk delete request.
   */
  "type": SecurityMonitoringRuleBulkDeleteRequestDataType;
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
      type: "SecurityMonitoringRuleBulkDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleBulkDeleteRequestDataType",
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
    return SecurityMonitoringRuleBulkDeleteData.attributeTypeMap;
  }

  public constructor() {}
}
