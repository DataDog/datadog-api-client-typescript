import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertionKind } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertionKind";
import { ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType } from "./ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType";

/**
 * Authenticate using a managed identity as a client assertion for a Microsoft Entra application.
 */
export class ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertion {
  /**
   * The Azure credential kind. The value should always be `managed_identity_client_assertion`.
   */
  "azureCredentialKind": ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertionKind;
  /**
   * The client ID of the Microsoft Entra application that trusts the managed identity.
   */
  "clientAssertionClientId": string;
  /**
   * The tenant ID of the Microsoft Entra application that trusts the managed identity.
   */
  "clientAssertionTenantId": string;
  /**
   * The ID of the user-assigned managed identity. If omitted, the system-assigned managed identity is used.
   */
  "userAssignedManagedIdentityId"?: string;
  /**
   * The type of the user-assigned managed identity ID.
   */
  "userAssignedManagedIdentityIdType"?: ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType;
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
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertionKind",
      required: true,
    },
    clientAssertionClientId: {
      baseName: "client_assertion_client_id",
      type: "string",
      required: true,
    },
    clientAssertionTenantId: {
      baseName: "client_assertion_tenant_id",
      type: "string",
      required: true,
    },
    userAssignedManagedIdentityId: {
      baseName: "user_assigned_managed_identity_id",
      type: "string",
    },
    userAssignedManagedIdentityIdType: {
      baseName: "user_assigned_managed_identity_id_type",
      type: "ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType",
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
    return ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertion.attributeTypeMap;
  }

  public constructor() {}
}
