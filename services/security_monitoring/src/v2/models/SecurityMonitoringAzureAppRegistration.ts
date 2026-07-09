import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An Azure App Registration discovered for the organization.
 */
export class SecurityMonitoringAzureAppRegistration {
  /**
   * The client ID of the App Registration.
   */
  "clientId": string;
  /**
   * The number of errors encountered while crawling resources for this App Registration.
   */
  "errorCount": number;
  /**
   * Whether resource collection is enabled for this App Registration.
   */
  "resourceCollectionEnabled": boolean;
  /**
   * The number of Azure subscriptions associated with this App Registration.
   */
  "subscriptionCount": number;
  /**
   * The Azure tenant ID of the App Registration.
   */
  "tenantId": string;
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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    errorCount: {
      baseName: "error_count",
      type: "number",
      required: true,
      format: "int64",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
      required: true,
    },
    subscriptionCount: {
      baseName: "subscription_count",
      type: "number",
      required: true,
      format: "int64",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
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
    return SecurityMonitoringAzureAppRegistration.attributeTypeMap;
  }

  public constructor() {}
}
