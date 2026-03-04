import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordUpdateItem } from "./LLMObsDatasetRecordUpdateItem";

/**
 * Attributes for updating records in an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsUpdateDataAttributesRequest {
  /**
   * List of records to update.
   */
  "records": Array<LLMObsDatasetRecordUpdateItem>;
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
    records: {
      baseName: "records",
      type: "Array<LLMObsDatasetRecordUpdateItem>",
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
    return LLMObsDatasetRecordsUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
