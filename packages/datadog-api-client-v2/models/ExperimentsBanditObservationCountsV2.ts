/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * How many observations the latest saved refresh saw, whatever the range. Null when its counts can't be read.
 */
export class ExperimentsBanditObservationCountsV2 {
  /**
   * Observations the refresh couldn't use.
   */
  "invalid": Int64;
  /**
   * Every observation. The sum of the other three.
   */
  "total": Int64;
  /**
   * Valid observations whose aggregation window is still open.
   */
  "validImmature": Int64;
  /**
   * Valid observations whose aggregation window has closed. The estimates use these.
   */
  "validMature": Int64;

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
    invalid: {
      baseName: "invalid",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    validImmature: {
      baseName: "valid_immature",
      type: "number",
      required: true,
      format: "int64",
    },
    validMature: {
      baseName: "valid_mature",
      type: "number",
      required: true,
      format: "int64",
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
    return ExperimentsBanditObservationCountsV2.attributeTypeMap;
  }

  public constructor() {}
}
