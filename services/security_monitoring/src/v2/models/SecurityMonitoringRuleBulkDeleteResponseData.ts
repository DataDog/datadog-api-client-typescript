import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleBulkDeleteResponseAttributes } from "./SecurityMonitoringRuleBulkDeleteResponseAttributes";
import { SecurityMonitoringRuleBulkDeleteResponseDataType } from "./SecurityMonitoringRuleBulkDeleteResponseDataType";

/**
 * Data for the bulk delete response.
 */
export class SecurityMonitoringRuleBulkDeleteResponseData {
  /**
   * Attributes for the bulk delete response.
   */
  "attributes"?: SecurityMonitoringRuleBulkDeleteResponseAttributes;
  /**
   * The identifier of the bulk delete response.
   */
  "id"?: string;
  /**
   * The resource type for a bulk delete response.
   */
  "type"?: SecurityMonitoringRuleBulkDeleteResponseDataType;
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
      type: "SecurityMonitoringRuleBulkDeleteResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleBulkDeleteResponseDataType",
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
    return SecurityMonitoringRuleBulkDeleteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
