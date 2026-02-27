import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordsDataRequest } from "./LLMObsDatasetRecordsDataRequest";

/**
 * Request to append records to an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsRequest {
  /**
   * Data object for appending records to an LLM Observability dataset.
   */
  "data": LLMObsDatasetRecordsDataRequest;
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
      type: "LLMObsDatasetRecordsDataRequest",
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
    return LLMObsDatasetRecordsRequest.attributeTypeMap;
  }

  public constructor() {}
}
