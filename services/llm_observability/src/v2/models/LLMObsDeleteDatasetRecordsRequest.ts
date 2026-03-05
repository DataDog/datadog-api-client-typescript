import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteDatasetRecordsDataRequest } from "./LLMObsDeleteDatasetRecordsDataRequest";

/**
 * Request to delete records from an LLM Observability dataset.
 */
export class LLMObsDeleteDatasetRecordsRequest {
  /**
   * Data object for deleting records from an LLM Observability dataset.
   */
  "data": LLMObsDeleteDatasetRecordsDataRequest;
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
      type: "LLMObsDeleteDatasetRecordsDataRequest",
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
    return LLMObsDeleteDatasetRecordsRequest.attributeTypeMap;
  }

  public constructor() {}
}
