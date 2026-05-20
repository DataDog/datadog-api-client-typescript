import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationAnalyticsAggregate } from "./LLMObsExperimentationAnalyticsAggregate";

/**
 * Attributes for an analytics request.
 */
export class LLMObsExperimentationAnalyticsDataAttributesRequest {
  /**
   * Analytics aggregation parameters.
   */
  "aggregate": LLMObsExperimentationAnalyticsAggregate;
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
    aggregate: {
      baseName: "aggregate",
      type: "LLMObsExperimentationAnalyticsAggregate",
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
    return LLMObsExperimentationAnalyticsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
