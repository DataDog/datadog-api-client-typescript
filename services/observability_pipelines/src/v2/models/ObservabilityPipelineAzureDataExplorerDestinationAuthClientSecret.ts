import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecretKind } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecretKind";

/**
 * Authenticate using a Microsoft Entra application client secret.
 */
export class ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecret {
  /**
   * The Microsoft Entra application (client) ID.
   */
  "azureClientId": string;
  /**
   * Name of the environment variable or secret that holds the Microsoft Entra application client secret.
   */
  "azureClientSecretKey": string;
  /**
   * The Azure credential kind. The value should always be `client_secret_credential`.
   */
  "azureCredentialKind": ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecretKind;
  /**
   * The Microsoft Entra tenant ID.
   */
  "azureTenantId": string;
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
    azureClientId: {
      baseName: "azure_client_id",
      type: "string",
      required: true,
    },
    azureClientSecretKey: {
      baseName: "azure_client_secret_key",
      type: "string",
      required: true,
    },
    azureCredentialKind: {
      baseName: "azure_credential_kind",
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecretKind",
      required: true,
    },
    azureTenantId: {
      baseName: "azure_tenant_id",
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
    return ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecret.attributeTypeMap;
  }

  public constructor() {}
}
