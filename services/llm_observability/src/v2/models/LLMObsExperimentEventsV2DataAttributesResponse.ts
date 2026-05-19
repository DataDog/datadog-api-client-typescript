import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentEvalMetricEvent } from "./LLMObsExperimentEvalMetricEvent";
import { LLMObsExperimentSpanWithEvals } from "./LLMObsExperimentSpanWithEvals";

/**
 * Attributes of an experiment events response.
 */
export class LLMObsExperimentEventsV2DataAttributesResponse {
  /**
   * Experiment spans, each enriched with their associated evaluation metrics.
   */
  "spans": Array<LLMObsExperimentSpanWithEvals>;
  /**
   * Experiment-level summary evaluation metrics (not tied to individual spans).
   */
  "summaryMetrics": Array<LLMObsExperimentEvalMetricEvent>;
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
    spans: {
      baseName: "spans",
      type: "Array<LLMObsExperimentSpanWithEvals>",
      required: true,
    },
    summaryMetrics: {
      baseName: "summary_metrics",
      type: "Array<LLMObsExperimentEvalMetricEvent>",
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
    return LLMObsExperimentEventsV2DataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
