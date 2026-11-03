/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Summary statistics for a metric recorded during a Model Lab run.
 */
export class ModelLabMetricSummary {
  /**
   * The total number of recorded values.
   */
  "count": number;
  /**
   * The first step at which the metric was recorded.
   */
  "firstStep"?: number;
  /**
   * The metric name.
   */
  "key": string;
  /**
   * The last step at which the metric was recorded.
   */
  "lastStep"?: number;
  /**
   * The most recently recorded value.
   */
  "latest"?: number;
  /**
   * The maximum recorded value.
   */
  "max"?: number;
  /**
   * The mean of recorded values.
   */
  "mean"?: number;
  /**
   * The minimum recorded value.
   */
  "min"?: number;
  /**
   * The standard deviation of recorded values.
   */
  "stddev"?: number;

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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    firstStep: {
      baseName: "first_step",
      type: "number",
      format: "int64",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    lastStep: {
      baseName: "last_step",
      type: "number",
      format: "int64",
    },
    latest: {
      baseName: "latest",
      type: "number",
      format: "double",
    },
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    mean: {
      baseName: "mean",
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
    },
    stddev: {
      baseName: "stddev",
      type: "number",
      format: "double",
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
    return ModelLabMetricSummary.attributeTypeMap;
  }

  public constructor() {}
}
