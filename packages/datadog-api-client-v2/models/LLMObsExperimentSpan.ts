/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentSpanMeta } from "./LLMObsExperimentSpanMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A span associated with an LLM Observability experiment.
 */
export class LLMObsExperimentSpan {
  /**
   * Dataset ID associated with this span.
   */
  "datasetId": string;
  /**
   * Duration of the span in nanoseconds.
   */
  "duration": number;
  /**
   * Metadata associated with an experiment span.
   */
  "meta"?: LLMObsExperimentSpanMeta;
  /**
   * Name of the span.
   */
  "name": string;
  /**
   * Project ID associated with this span.
   */
  "projectId": string;
  /**
   * Unique identifier of the span.
   */
  "spanId": string;
  /**
   * Start time of the span in nanoseconds since Unix epoch.
   */
  "startNs": number;
  /**
   * Status of the span.
   */
  "status": string;
  /**
   * List of tags associated with the span.
   */
  "tags"?: Array<string>;
  /**
   * Trace ID for the span.
   */
  "traceId": string;

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
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    duration: {
      baseName: "duration",
      type: "number",
      required: true,
      format: "int64",
    },
    meta: {
      baseName: "meta",
      type: "LLMObsExperimentSpanMeta",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    spanId: {
      baseName: "span_id",
      type: "string",
      required: true,
    },
    startNs: {
      baseName: "start_ns",
      type: "number",
      required: true,
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    traceId: {
      baseName: "trace_id",
      type: "string",
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
    return LLMObsExperimentSpan.attributeTypeMap;
  }

  public constructor() {}
}
