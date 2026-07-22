import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringEntraIdAzureAppRegistrationsAttributes } from "./SecurityMonitoringEntraIdAzureAppRegistrationsAttributes";
import { SecurityMonitoringEntraIdAzureAppRegistrationsResourceType } from "./SecurityMonitoringEntraIdAzureAppRegistrationsResourceType";

/**
 * The Azure App Registration prerequisites for the Entra ID integration.
 */
export class SecurityMonitoringEntraIdAzureAppRegistrationsData {
  /**
   * The attributes of the Entra ID Azure App Registration prerequisites.
   */
  "attributes": SecurityMonitoringEntraIdAzureAppRegistrationsAttributes;
  /**
   * The ID of the organization the Azure App Registrations belong to.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `entra_id_azure_app_registrations`.
   */
  "type": SecurityMonitoringEntraIdAzureAppRegistrationsResourceType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "SecurityMonitoringEntraIdAzureAppRegistrationsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringEntraIdAzureAppRegistrationsResourceType",
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
    return SecurityMonitoringEntraIdAzureAppRegistrationsData.attributeTypeMap;
  }

  public constructor() {}
}
