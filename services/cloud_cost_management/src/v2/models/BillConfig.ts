import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Bill config.
 */
export class BillConfig {
  /**
   * The name of the configured Azure Export.
   */
  "exportName": string;
  /**
   * The path where the Azure Export is saved.
   */
  "exportPath": string;
  /**
   * The name of the storage account where the Azure Export is saved.
   */
  "storageAccount": string;
  /**
   * The name of the storage container where the Azure Export is saved.
   */
  "storageContainer": string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BillConfig.attributeTypeMap;
  }

  public constructor() {}
}
