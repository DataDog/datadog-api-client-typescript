import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `UCConfigPairDataAttributesConfigsItems` object.
 */
export class UCConfigPairDataAttributesConfigsItems {
  /**
   * The `items` `account_id`.
   */
  "accountId"?: string;
  /**
   * The `items` `client_id`.
   */
  "clientId"?: string;
  /**
   * The `items` `created_at`.
   */
  "createdAt"?: string;
  /**
   * The `items` `dataset_type`.
   */
  "datasetType"?: string;
  /**
   * The `items` `error_messages`.
   */
  "errorMessages"?: Array<string>;
  /**
   * The `items` `export_name`.
   */
  "exportName"?: string;
  /**
   * The `items` `export_path`.
   */
  "exportPath"?: string;
  /**
   * The `items` `id`.
   */
  "id"?: string;
  /**
   * The `items` `months`.
   */
  "months"?: number;
  /**
   * The `items` `scope`.
   */
  "scope"?: string;
  /**
   * The `items` `status`.
   */
  "status"?: string;
  /**
   * The `items` `status_updated_at`.
   */
  "statusUpdatedAt"?: string;
  /**
   * The `items` `storage_account`.
   */
  "storageAccount"?: string;
  /**
   * The `items` `storage_container`.
   */
  "storageContainer"?: string;
  /**
   * The `items` `updated_at`.
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
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    datasetType: {
      baseName: "dataset_type",
      type: "string",
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    exportName: {
      baseName: "export_name",
      type: "string",
    },
    exportPath: {
      baseName: "export_path",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    months: {
      baseName: "months",
      type: "number",
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    statusUpdatedAt: {
      baseName: "status_updated_at",
      type: "string",
    },
    storageAccount: {
      baseName: "storage_account",
      type: "string",
    },
    storageContainer: {
      baseName: "storage_container",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
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
    return UCConfigPairDataAttributesConfigsItems.attributeTypeMap;
  }

  public constructor() {}
}
