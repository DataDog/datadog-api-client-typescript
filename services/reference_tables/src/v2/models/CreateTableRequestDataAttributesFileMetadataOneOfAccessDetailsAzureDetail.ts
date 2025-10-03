import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail` object.
 */
export class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail {
  /**
   * The Azure client ID.
   */
  "azureClientId": string;
  /**
   * The name of the Azure container.
   */
  "azureContainerName": string;
  /**
   * The name of the Azure storage account.
   */
  "azureStorageAccountName": string;
  /**
   * The ID of the Azure tenant.
   */
  "azureTenantId": string;
  /**
   * The relative file path from the Azure container root to the CSV file.
   */
  "filePath": string;
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
    azureContainerName: {
      baseName: "azure_container_name",
      type: "string",
      required: true,
    },
    azureStorageAccountName: {
      baseName: "azure_storage_account_name",
      type: "string",
      required: true,
    },
    azureTenantId: {
      baseName: "azure_tenant_id",
      type: "string",
      required: true,
    },
    filePath: {
      baseName: "file_path",
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
    return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.attributeTypeMap;
  }

  public constructor() {}
}
