import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigUpdateData } from "./SecurityMonitoringIntegrationConfigUpdateData";

/**
 * Request body to update an entity context sync configuration. Supports partial updates.
 */
export class SecurityMonitoringIntegrationConfigUpdateRequest {
  /**
   * The entity context sync configuration fields to update.
   */
  "data": SecurityMonitoringIntegrationConfigUpdateData;
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
      type: "SecurityMonitoringIntegrationConfigUpdateData",
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
    return SecurityMonitoringIntegrationConfigUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
