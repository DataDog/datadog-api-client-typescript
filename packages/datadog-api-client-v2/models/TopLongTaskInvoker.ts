/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LongTaskStatsPerView } from "./LongTaskStatsPerView";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A top long task invoker within an invoker type.
 */
export class TopLongTaskInvoker {
  /**
   * Number of sampled views where this invoker had long tasks contributing to the criteria metric.
   */
  "criteriaViewOccurrences"?: number;
  /**
   * Cleaned source file path for the invoker script.
   */
  "file": string | null;
  /**
   * Rank-product impact score combining view frequency and blocking time severity.
   */
  "impactScore"?: number;
  /**
   * Name of the invoker function or script.
   */
  "invoker": string;
  /**
   * Statistical distributions of long task metrics computed per view across sampled views.
   */
  "statsPerView": LongTaskStatsPerView;
  /**
   * Number of sampled views where this invoker had any long tasks.
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
    criteriaViewOccurrences: {
      baseName: "criteria_view_occurrences",
      type: "number",
      format: "int32",
    },
    file: {
      baseName: "file",
      type: "string",
      required: true,
    },
    impactScore: {
      baseName: "impact_score",
      type: "number",
      format: "double",
    },
    invoker: {
      baseName: "invoker",
      type: "string",
      required: true,
    },
    statsPerView: {
      baseName: "stats_per_view",
      type: "LongTaskStatsPerView",
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
    return TopLongTaskInvoker.attributeTypeMap;
  }

  public constructor() {}
}
