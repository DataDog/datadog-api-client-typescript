import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetBatchUpdateDataRequest } from "./LLMObsDatasetBatchUpdateDataRequest";

/**
 * Request to batch-insert, update, and delete records in an LLM Observability dataset.
 */
export class LLMObsDatasetBatchUpdateRequest {
  /**
   * Data object for batch-updating records in an LLM Observability dataset.
   */
  "data": LLMObsDatasetBatchUpdateDataRequest;
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
    data: {
      baseName: "data",
      type: "LLMObsDatasetBatchUpdateDataRequest",
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
    return LLMObsDatasetBatchUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
