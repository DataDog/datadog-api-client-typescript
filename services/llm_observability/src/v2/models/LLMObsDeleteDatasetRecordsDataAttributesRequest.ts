import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for deleting records from an LLM Observability dataset.
 */
export class LLMObsDeleteDatasetRecordsDataAttributesRequest {
  /**
   * List of record IDs to delete.
   */
  "recordIds": Array<string>;
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
    recordIds: {
      baseName: "record_ids",
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
    return LLMObsDeleteDatasetRecordsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
