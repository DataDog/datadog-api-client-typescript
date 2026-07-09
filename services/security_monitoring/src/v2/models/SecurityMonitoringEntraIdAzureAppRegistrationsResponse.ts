import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringEntraIdAzureAppRegistrationsData } from "./SecurityMonitoringEntraIdAzureAppRegistrationsData";

/**
 * Response containing the Azure App Registration prerequisites for the Entra ID integration.
 */
export class SecurityMonitoringEntraIdAzureAppRegistrationsResponse {
  /**
   * The Azure App Registration prerequisites for the Entra ID integration.
   */
  "data": SecurityMonitoringEntraIdAzureAppRegistrationsData;
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
      type: "SecurityMonitoringEntraIdAzureAppRegistrationsData",
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
    return SecurityMonitoringEntraIdAzureAppRegistrationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
