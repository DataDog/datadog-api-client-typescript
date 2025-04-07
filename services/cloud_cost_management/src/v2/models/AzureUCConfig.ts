import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Azure config.
 */
export class AzureUCConfig {
  /**
   * The tenant ID of the azure account.
   */
  "accountId": string;
  /**
   * The client ID of the Azure account.
   */
  "clientId": string;
  /**
   * The timestamp when the Azure config was created.
   */
  "createdAt"?: string;
  /**
   * The dataset type of the Azure config.
   */
  "datasetType": string;
  /**
   * The error messages for the Azure config.
   */
  "errorMessages"?: Array<string>;
  /**
   * The name of the configured Azure Export.
   */
  "exportName": string;
  /**
   * The path where the Azure Export is saved.
   */
  "exportPath": string;
  /**
   * The ID of the Azure config.
   */
  "id"?: number;
  /**
   * The number of months the report has been backfilled.
   */
  "months"?: number;
  /**
   * The scope of your observed subscription.
   */
  "scope": string;
  /**
   * The status of the Azure config.
   */
  "status": string;
  /**
   * The timestamp when the Azure config status was last updated.
   */
  "statusUpdatedAt"?: string;
  /**
   * The name of the storage account where the Azure Export is saved.
   */
  "storageAccount": string;
  /**
   * The name of the storage container where the Azure Export is saved.
   */
  "storageContainer": string;
  /**
   * The timestamp when the Azure config was last updated.
   */
  "updatedAt"?: string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    datasetType: {
      baseName: "dataset_type",
      type: "string",
      required: true,
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    exportName: {
      baseName: "export_name",
      type: "string",
      required: true,
    },
    exportPath: {
      baseName: "export_path",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    months: {
      baseName: "months",
      type: "number",
      format: "int32",
    },
    scope: {
      baseName: "scope",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    statusUpdatedAt: {
      baseName: "status_updated_at",
      type: "string",
    },
    storageAccount: {
      baseName: "storage_account",
      type: "string",
      required: true,
    },
    storageContainer: {
      baseName: "storage_container",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfig.attributeTypeMap;
  }

  public constructor() {}
}
