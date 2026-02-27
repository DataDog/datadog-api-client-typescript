import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordItem } from "./LLMObsDatasetRecordItem";

/**
 * Attributes for appending records to an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsDataAttributesRequest {
  /**
   * Whether to deduplicate records before appending. Defaults to `true`.
   */
  "deduplicate"?: boolean;
  /**
   * List of records to append to the dataset.
   */
  "records": Array<LLMObsDatasetRecordItem>;
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
    deduplicate: {
      baseName: "deduplicate",
      type: "boolean",
    },
    records: {
      baseName: "records",
      type: "Array<LLMObsDatasetRecordItem>",
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
    return LLMObsDatasetRecordsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
