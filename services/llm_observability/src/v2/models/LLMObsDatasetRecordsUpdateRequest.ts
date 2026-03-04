import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordsUpdateDataRequest } from "./LLMObsDatasetRecordsUpdateDataRequest";

/**
 * Request to update records in an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsUpdateRequest {
  /**
   * Data object for updating records in an LLM Observability dataset.
   */
  "data": LLMObsDatasetRecordsUpdateDataRequest;
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
      type: "LLMObsDatasetRecordsUpdateDataRequest",
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
    return LLMObsDatasetRecordsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
