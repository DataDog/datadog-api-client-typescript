/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an aggregated waterfall query.
 */
export class AggregatedWaterfallRequestAttributes {
  /**
   * The RUM application ID to analyze.
   */
  "applicationId": string;
  /**
   * Performance criteria to filter view instances by a metric threshold.
   */
  "criteria"?: AggregatedWaterfallPerformanceCriteria;
  /**
   * RUM query string to filter events (for example, @session.type:user @geo.country:US).
   */
  "filter"?: string;
  /**
   * Start of the time range as a Unix timestamp in seconds.
   */
  "from": number;
  /**
   * When true, enriches each resource with cross-view appearance statistics.
   */
  "includeGlobalAppearance"?: boolean;
  /**
   * Number of view instances to sample, between 1 and 500.
   */
  "sampleSize": number;
  /**
   * End of the time range as a Unix timestamp in seconds.
   */
  "to": number;
  /**
   * The RUM view name to analyze (for example, /account/login).
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
    filter: {
      baseName: "filter",
      type: "string",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    includeGlobalAppearance: {
      baseName: "include_global_appearance",
      type: "boolean",
    },
    sampleSize: {
      baseName: "sample_size",
      type: "number",
      required: true,
      format: "int32",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
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
    return AggregatedWaterfallRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
