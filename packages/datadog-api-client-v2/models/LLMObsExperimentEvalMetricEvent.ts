/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsMetricAssessment } from "./LLMObsMetricAssessment";
import { LLMObsMetricScoreType } from "./LLMObsMetricScoreType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An evaluation metric event associated with an experiment span.
 */
export class LLMObsExperimentEvalMetricEvent {
  /**
   * Assessment result for an LLM Observability experiment metric.
   */
  "assessment"?: LLMObsMetricAssessment;
  /**
   * Boolean value. Present when `metric_type` is `boolean`.
   */
  "booleanValue"?: boolean;
  /**
   * Categorical value. Present when `metric_type` is `categorical`.
   */
  "categoricalValue"?: string;
  /**
   * Source type of the evaluation.
   */
  "evalSourceType"?: string;
  /**
   * Unique identifier of the evaluation metric event.
   */
  "id"?: string;
  /**
   * JSON value. Present when `metric_type` is `json`.
   */
  "jsonValue"?: { [key: string]: any };
  /**
   * Label or name for the metric.
   */
  "label"?: string;
  /**
   * Arbitrary metadata associated with the metric.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Source of the metric. Either `custom` (user-submitted) or `summary` (experiment-level aggregate).
   */
  "metricSource"?: string;
  /**
   * Type of metric recorded for an LLM Observability experiment.
   */
  "metricType"?: LLMObsMetricScoreType;
  /**
   * Human-readable reasoning for the metric value.
   */
  "reasoning"?: string;
  /**
   * Numeric score. Present when `metric_type` is `score`.
   */
  "scoreValue"?: number;
  /**
   * Span ID this metric is associated with.
   */
  "spanId"?: string;
  /**
   * Tags associated with the metric.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp when the metric was recorded, in milliseconds since Unix epoch.
   */
  "timestampMs"?: number;
  /**
   * Trace ID linking this metric to a span.
   */
  "traceId"?: string;

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
    assessment: {
      baseName: "assessment",
      type: "LLMObsMetricAssessment",
    },
    booleanValue: {
      baseName: "boolean_value",
      type: "boolean",
    },
    categoricalValue: {
      baseName: "categorical_value",
      type: "string",
    },
    evalSourceType: {
      baseName: "eval_source_type",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    jsonValue: {
      baseName: "json_value",
      type: "{ [key: string]: any; }",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    metricSource: {
      baseName: "metric_source",
      type: "string",
    },
    metricType: {
      baseName: "metric_type",
      type: "LLMObsMetricScoreType",
    },
    reasoning: {
      baseName: "reasoning",
      type: "string",
    },
    scoreValue: {
      baseName: "score_value",
      type: "number",
      format: "double",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestampMs: {
      baseName: "timestamp_ms",
      type: "number",
      format: "int64",
    },
    traceId: {
      baseName: "trace_id",
      type: "string",
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
    return LLMObsExperimentEvalMetricEvent.attributeTypeMap;
  }

  public constructor() {}
}
