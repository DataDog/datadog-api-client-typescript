import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The BigQuery table the committed use discount (CUD) metadata is read from. Only returned when CUD metadata is configured for the account.
 */
export class GCPCudMetadataConfig {
  /**
   * The BigQuery dataset ID of the CUD metadata export.
   */
  "datasetId": string;
  /**
   * The Google Cloud project ID of the CUD metadata export.
   */
  "projectId": string;
  /**
   * The BigQuery table ID of the CUD metadata export.
   */
  "tableId": string;
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
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    tableId: {
      baseName: "table_id",
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
    return GCPCudMetadataConfig.attributeTypeMap;
  }

  public constructor() {}
}
