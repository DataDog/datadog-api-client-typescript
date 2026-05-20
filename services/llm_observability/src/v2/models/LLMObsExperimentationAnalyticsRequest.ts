import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationAnalyticsDataRequest } from "./LLMObsExperimentationAnalyticsDataRequest";

/**
 * Request to run an analytics aggregation over LLM Observability experimentation data.
 */
export class LLMObsExperimentationAnalyticsRequest {
  /**
   * Data object for an analytics request.
   */
  "data": LLMObsExperimentationAnalyticsDataRequest;
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
      type: "LLMObsExperimentationAnalyticsDataRequest",
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
    return LLMObsExperimentationAnalyticsRequest.attributeTypeMap;
  }

  public constructor() {}
}
