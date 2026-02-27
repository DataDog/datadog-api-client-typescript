import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for deleting LLM Observability datasets.
 */
export class LLMObsDeleteDatasetsDataAttributesRequest {
  /**
   * List of dataset IDs to delete.
   */
  "datasetIds": Array<string>;
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
    datasetIds: {
      baseName: "dataset_ids",
      type: "Array<string>",
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
    return LLMObsDeleteDatasetsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
