import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificateKind } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificateKind";

/**
 * Authenticate using a Microsoft Entra application client certificate.
 */
export class ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificate {
  /**
   * The Microsoft Entra application (client) ID.
   */
  "azureClientId": string;
  /**
   * The Azure credential kind. The value should always be `client_certificate_credential`.
   */
  "azureCredentialKind": ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificateKind;
  /**
   * The Microsoft Entra tenant ID.
   */
  "azureTenantId": string;
  /**
   * Name of the environment variable or secret that holds the password for the client certificate.
   */
  "certificatePasswordKey"?: string;
  /**
   * Path to the `.pfx` client certificate file on the Worker.
   */
  "certificatePath": string;
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
    azureCredentialKind: {
      baseName: "azure_credential_kind",
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificateKind",
      required: true,
    },
    azureTenantId: {
      baseName: "azure_tenant_id",
      type: "string",
      required: true,
    },
    certificatePasswordKey: {
      baseName: "certificate_password_key",
      type: "string",
    },
    certificatePath: {
      baseName: "certificate_path",
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
    return ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificate.attributeTypeMap;
  }

  public constructor() {}
}
