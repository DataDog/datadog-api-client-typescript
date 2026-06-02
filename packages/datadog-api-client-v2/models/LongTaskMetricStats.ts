/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Statistical distribution (average, min, max) of a long task metric across sampled views.
 */
export class LongTaskMetricStats {
  /**
   * Average value across sampled views.
   */
  "average": number;
  /**
   * Maximum value across sampled views.
   */
  "max": number;
  /**
   * Minimum value across sampled views.
   */
  "min": number;

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
    average: {
      baseName: "average",
      type: "number",
      required: true,
      format: "double",
    },
    max: {
      baseName: "max",
      type: "number",
      required: true,
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      required: true,
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
    return LongTaskMetricStats.attributeTypeMap;
  }

  public constructor() {}
}
