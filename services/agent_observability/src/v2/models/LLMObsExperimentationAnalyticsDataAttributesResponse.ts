import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationAnalyticsResult } from "./LLMObsExperimentationAnalyticsResult";

/**
 * Attributes of an analytics response.
 */
export class LLMObsExperimentationAnalyticsDataAttributesResponse {
  /**
   * Total number of events matched by the query before grouping.
   */
  "hitCount": number;
  /**
   * Analytics query result containing all buckets.
   */
  "result": LLMObsExperimentationAnalyticsResult;
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
    hitCount: {
      baseName: "hit_count",
      type: "number",
      required: true,
      format: "int64",
    },
    result: {
      baseName: "result",
      type: "LLMObsExperimentationAnalyticsResult",
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
    return LLMObsExperimentationAnalyticsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
