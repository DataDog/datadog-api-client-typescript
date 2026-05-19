/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentEvalMetricEvent } from "./LLMObsExperimentEvalMetricEvent";
import { LLMObsExperimentSpanWithEvals } from "./LLMObsExperimentSpanWithEvals";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
