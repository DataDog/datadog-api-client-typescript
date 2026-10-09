/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentityKind } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentityKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Authenticate using Azure Workload Identity (for example, on Kubernetes).
 */
export class ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentity {
  /**
   * The Azure credential kind. The value should always be `workload_identity`.
   */
  "azureCredentialKind": ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentityKind;
  /**
   * The client ID of the Microsoft Entra application. If omitted, it is read from the environment.
   */
  "clientId"?: string;
  /**
   * The Microsoft Entra tenant ID. If omitted, it is read from the environment.
   */
  "tenantId"?: string;
  /**
   * Path to the federated token file. If omitted, it is read from the environment.
   */
  "tokenFilePath"?: string;

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
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentityKind",
      required: true,
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
    },
    tokenFilePath: {
      baseName: "token_file_path",
      type: "string",
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
    return ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentity.attributeTypeMap;
  }

  public constructor() {}
}
