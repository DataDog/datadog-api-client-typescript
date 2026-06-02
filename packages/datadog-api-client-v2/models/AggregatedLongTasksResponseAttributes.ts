/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedLongTasksByInvokerType } from "./AggregatedLongTasksByInvokerType";
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an aggregated long tasks response.
 */
export class AggregatedLongTasksResponseAttributes {
  /**
   * The RUM application ID that was analyzed.
   */
  "applicationId": string;
  /**
   * Performance criteria to filter view instances by a metric threshold.
   */
  "criteria"?: AggregatedWaterfallPerformanceCriteria;
  /**
   * Start of the analyzed time range as a Unix timestamp in seconds.
   */
  "from": number;
  /**
   * Long task statistics grouped by invoker type, sorted by impact score descending.
   */
  "longTasksByInvokerType": Array<AggregatedLongTasksByInvokerType>;
  /**
   * List of RUM view IDs sampled for this aggregation, capped at 50.
   */
  "sampledViewIds": Array<string>;
  /**
   * End of the analyzed time range as a Unix timestamp in seconds.
   */
  "to": number;
  /**
   * Number of view instances included in the analysis.
   */
  "viewCount": number;
  /**
   * The RUM view name that was analyzed.
   */
  "viewName": string;

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
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
    },
    criteria: {
      baseName: "criteria",
      type: "AggregatedWaterfallPerformanceCriteria",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    longTasksByInvokerType: {
      baseName: "long_tasks_by_invoker_type",
      type: "Array<AggregatedLongTasksByInvokerType>",
      required: true,
    },
    sampledViewIds: {
      baseName: "sampled_view_ids",
      type: "Array<string>",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    viewCount: {
      baseName: "view_count",
      type: "number",
      required: true,
      format: "int32",
    },
    viewName: {
      baseName: "view_name",
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
    return AggregatedLongTasksResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
