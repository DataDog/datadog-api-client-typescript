import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigCreateData } from "./SecurityMonitoringIntegrationConfigCreateData";

/**
 * Request body to create an entity context sync configuration.
 */
export class SecurityMonitoringIntegrationConfigCreateRequest {
  /**
   * The entity context sync configuration to create.
   */
  "data": SecurityMonitoringIntegrationConfigCreateData;
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
      type: "SecurityMonitoringIntegrationConfigCreateData",
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
    return SecurityMonitoringIntegrationConfigCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
