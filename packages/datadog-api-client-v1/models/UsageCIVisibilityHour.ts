/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * CI visibility usage in a given hour.
 */
export class UsageCIVisibilityHour {
  /**
   * The number of spans for pipelines in the queried hour.
   */
  "ciPipelineIndexedSpans"?: number;
  /**
   * The number of spans for tests in the queried hour.
   */
  "ciTestIndexedSpans"?: number;
  /**
   * Shows the total count of all active Git committers for Pipelines in the current month. A committer is active if they commit at least 3 times in a given month.
   */
  "ciVisibilityPipelineCommitters"?: number;
  /**
   * The total count of all active Git committers for tests in the current month. A committer is active if they commit at least 3 times in a given month.
   */
  "ciVisibilityTestCommitters"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ciPipelineIndexedSpans: {
      baseName: "ci_pipeline_indexed_spans",
      type: "number",
    },
    ciTestIndexedSpans: {
      baseName: "ci_test_indexed_spans",
      type: "number",
    },
    ciVisibilityPipelineCommitters: {
      baseName: "ci_visibility_pipeline_committers",
      type: "number",
    },
    ciVisibilityTestCommitters: {
      baseName: "ci_visibility_test_committers",
      type: "number",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCIVisibilityHour.attributeTypeMap;
  }

  public constructor() {}
}
