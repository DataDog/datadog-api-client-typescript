import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { SecurityMonitoringRuleBulkDeleteResponseData } from "./SecurityMonitoringRuleBulkDeleteResponseData";

/**
 * Response for bulk deleting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkDeleteResponse {
  /**
   * Data for the bulk delete response.
   */
  "data"?: SecurityMonitoringRuleBulkDeleteResponseData;
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
      type: "SecurityMonitoringRuleBulkDeleteResponseData",
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
    return SecurityMonitoringRuleBulkDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
