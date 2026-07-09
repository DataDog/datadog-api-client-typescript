import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationActivateData } from "./SecurityMonitoringIntegrationActivateData";

/**
 * Request body to activate an entity context sync integration for a source type that does not require secrets.
 */
export class SecurityMonitoringIntegrationActivateRequest {
  /**
   * The configuration overrides for the integration to activate.
   */
  "data"?: SecurityMonitoringIntegrationActivateData;
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
      type: "SecurityMonitoringIntegrationActivateData",
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
    return SecurityMonitoringIntegrationActivateRequest.attributeTypeMap;
  }

  public constructor() {}
}
