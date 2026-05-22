import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an LLM Observability dataset version.
 */
export class LLMObsDatasetVersionDataAttributes {
  /**
   * Unique identifier of the dataset this version belongs to.
   */
  "datasetId": string;
  /**
   * Timestamp when this dataset version was last referenced. Null if the version has never been used.
   */
  "lastUsed": Date | null;
  /**
   * Sequential version number for this dataset version.
   */
  "versionNumber": number;
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
    lastUsed: {
      baseName: "last_used",
      type: "Date",
      required: true,
      format: "date-time",
    },
    versionNumber: {
      baseName: "version_number",
      type: "number",
      required: true,
      format: "int32",
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
    return LLMObsDatasetVersionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
