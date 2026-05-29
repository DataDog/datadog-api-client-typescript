import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for restoring an LLM Observability dataset to a previous version.
 */
export class LLMObsDatasetRestoreVersionDataAttributesRequest {
  /**
   * Version number of the dataset to restore. Must be between 0 and the current version of the dataset, inclusive.
   */
  "datasetVersion": number;
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
    datasetVersion: {
      baseName: "dataset_version",
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
    return LLMObsDatasetRestoreVersionDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
