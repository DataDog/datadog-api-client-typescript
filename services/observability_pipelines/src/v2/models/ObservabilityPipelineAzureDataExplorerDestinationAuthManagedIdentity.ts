import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityKind } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityKind";
import { ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType } from "./ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType";

/**
 * Authenticate using an Azure managed identity.
 */
export class ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentity {
  /**
   * The Azure credential kind. The value should always be `managed_identity`.
   */
  "azureCredentialKind": ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityKind;
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
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityKind",
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
    return ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentity.attributeTypeMap;
  }

  public constructor() {}
}
