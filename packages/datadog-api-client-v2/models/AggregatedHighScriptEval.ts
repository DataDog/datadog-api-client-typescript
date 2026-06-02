/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregated high script evaluation detection grouped by source.
 */
export class AggregatedHighScriptEval {
  /**
   * Average script evaluation duration in nanoseconds.
   */
  "avgDuration": number;
  /**
   * Average forced style/layout duration in nanoseconds.
   */
  "avgForcedStyleLayout": number;
  /**
   * Unique fingerprint identifying this detection group.
   */
  "fingerprint": string;
  /**
   * Impact score combining view frequency and duration severity.
   */
  "impactScore": number;
  /**
   * Total number of detection instances across sampled views.
   */
  "instanceCount": number;
  /**
   * Type of invoker that triggered the script evaluation.
   */
  "invokerType": string;
  /**
   * Category of the script source.
   */
  "sourceCategory": string | null;
  /**
   * Name of the function that triggered the high script evaluation.
   */
  "sourceFunctionName": string;
  /**
   * URL of the script that triggered the high script evaluation.
   */
  "sourceUrl": string | null;
  /**
   * Number of sampled views where this detection occurred.
   */
  "viewOccurrences": number;

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
    avgDuration: {
      baseName: "avg_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    avgForcedStyleLayout: {
      baseName: "avg_forced_style_layout",
      type: "number",
      required: true,
      format: "int64",
    },
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
      required: true,
    },
    impactScore: {
      baseName: "impact_score",
      type: "number",
      required: true,
      format: "double",
    },
    instanceCount: {
      baseName: "instance_count",
      type: "number",
      required: true,
      format: "int32",
    },
    invokerType: {
      baseName: "invoker_type",
      type: "string",
      required: true,
    },
    sourceCategory: {
      baseName: "source_category",
      type: "string",
      required: true,
    },
    sourceFunctionName: {
      baseName: "source_function_name",
      type: "string",
      required: true,
    },
    sourceUrl: {
      baseName: "source_url",
      type: "string",
      required: true,
    },
    viewOccurrences: {
      baseName: "view_occurrences",
      type: "number",
      required: true,
      format: "int32",
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
    return AggregatedHighScriptEval.attributeTypeMap;
  }

  public constructor() {}
}
