/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentEvalMetricEvent } from "./LLMObsExperimentEvalMetricEvent";
import { LLMObsExperimentSpanMeta } from "./LLMObsExperimentSpanMeta";
import { LLMObsExperimentSpanStatus } from "./LLMObsExperimentSpanStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An experiment span enriched with its associated evaluation metrics.
 */
export class LLMObsExperimentSpanWithEvals {
  /**
   * ID of the dataset record this span evaluated.
   */
  "datasetRecordId"?: string;
  /**
   * Duration of the span in nanoseconds.
   */
  "duration"?: number;
  /**
   * Evaluation metrics associated with this span.
   */
  "evalMetrics"?: Array<LLMObsExperimentEvalMetricEvent>;
  /**
   * Unique identifier of the span.
   */
  "id"?: string;
  /**
   * Metadata associated with an experiment span.
   */
  "meta"?: LLMObsExperimentSpanMeta;
  /**
   * Numeric metrics attached to the span.
   */
  "metrics"?: { [key: string]: number };
  /**
   * Name of the span.
   */
  "name"?: string;
  /**
   * Parent span ID, if any.
   */
  "parentId"?: string;
  /**
   * Span ID.
   */
  "spanId"?: string;
  /**
   * Start time in nanoseconds since Unix epoch.
   */
  "startNs"?: number;
  /**
   * Status of the span.
   */
  "status"?: LLMObsExperimentSpanStatus;
  /**
   * Tags associated with the span.
   */
  "tags"?: Array<string>;
  /**
   * Trace ID.
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
    datasetRecordId: {
      baseName: "dataset_record_id",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    evalMetrics: {
      baseName: "eval_metrics",
      type: "Array<LLMObsExperimentEvalMetricEvent>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "LLMObsExperimentSpanMeta",
    },
    metrics: {
      baseName: "metrics",
      type: "{ [key: string]: number; }",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    parentId: {
      baseName: "parent_id",
      type: "string",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
    },
    startNs: {
      baseName: "start_ns",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "LLMObsExperimentSpanStatus",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return LLMObsExperimentSpanWithEvals.attributeTypeMap;
  }

  public constructor() {}
}
