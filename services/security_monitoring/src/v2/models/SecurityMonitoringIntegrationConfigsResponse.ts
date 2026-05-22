import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigData } from "./SecurityMonitoringIntegrationConfigData";

/**
 * Response containing a list of entity context sync configurations.
 */
export class SecurityMonitoringIntegrationConfigsResponse {
  /**
   * The list of integration configurations.
   */
  "data": Array<SecurityMonitoringIntegrationConfigData>;
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
      type: "Array<SecurityMonitoringIntegrationConfigData>",
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
    return SecurityMonitoringIntegrationConfigsResponse.attributeTypeMap;
  }

  public constructor() {}
}
