import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCliKind } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCliKind";

/**
 * Authenticate using the Azure CLI credentials available in the environment.
 */
export class ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCli {
  /**
   * The Azure credential kind. The value should always be `azure_cli`.
   */
  "azureCredentialKind": ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCliKind;
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
    azureCredentialKind: {
      baseName: "azure_credential_kind",
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCliKind",
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
    return ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCli.attributeTypeMap;
  }

  public constructor() {}
}
