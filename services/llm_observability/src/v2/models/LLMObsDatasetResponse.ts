import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetDataResponse } from "./LLMObsDatasetDataResponse";

/**
 * Response containing a single LLM Observability dataset.
 */
export class LLMObsDatasetResponse {
  /**
   * Data object for an LLM Observability dataset.
   */
  "data": LLMObsDatasetDataResponse;
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
      type: "LLMObsDatasetDataResponse",
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
    return LLMObsDatasetResponse.attributeTypeMap;
  }

  public constructor() {}
}
