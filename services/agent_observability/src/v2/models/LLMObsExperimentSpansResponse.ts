import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentSpanDataResponse } from "./LLMObsExperimentSpanDataResponse";

/**
 * Response for listing experiment spans (v1). Returns only spans with their evaluation metrics. No summary metrics or pagination are included. Deprecated in favor of `ListLLMObsExperimentEventsV3`.
 */
export class LLMObsExperimentSpansResponse {
  /**
   * List of experiment spans with their evaluation metrics.
   */
  "data": Array<LLMObsExperimentSpanDataResponse>;
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
      type: "Array<LLMObsExperimentSpanDataResponse>",
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
    return LLMObsExperimentSpansResponse.attributeTypeMap;
  }

  public constructor() {}
}
