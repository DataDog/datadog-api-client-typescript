import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationAnalyticsValue } from "./LLMObsExperimentationAnalyticsValue";

/**
 * Analytics query result containing all buckets.
 */
export class LLMObsExperimentationAnalyticsResult {
  /**
   * List of result buckets.
   */
  "values": Array<LLMObsExperimentationAnalyticsValue>;
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
    values: {
      baseName: "values",
      type: "Array<LLMObsExperimentationAnalyticsValue>",
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
    return LLMObsExperimentationAnalyticsResult.attributeTypeMap;
  }

  public constructor() {}
}
