/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";
import { SignalsProblemsDetections } from "./SignalsProblemsDetections";
import { SignalsProblemsSampleMetadata } from "./SignalsProblemsSampleMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an aggregated signals and problems response.
 */
export class AggregatedSignalsProblemsResponseAttributes {
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
   * Grouped detection results by detection type.
   */
  "problemDetections": SignalsProblemsDetections;
  /**
   * Metadata about the sampling quality for a signals and problems query.
   */
  "sampleMetadata": SignalsProblemsSampleMetadata;
  /**
   * End of the analyzed time range as a Unix timestamp in seconds.
   */
  "to": number;
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
    problemDetections: {
      baseName: "problem_detections",
      type: "SignalsProblemsDetections",
      required: true,
    },
    sampleMetadata: {
      baseName: "sample_metadata",
      type: "SignalsProblemsSampleMetadata",
      required: true,
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
    return AggregatedSignalsProblemsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
