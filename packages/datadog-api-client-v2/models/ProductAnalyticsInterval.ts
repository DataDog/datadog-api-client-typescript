/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An interval definition in a timeseries response.
 */
export class ProductAnalyticsInterval {
  "milliseconds"?: number;
  "startTime"?: number;
  "times"?: Array<number>;
  "type"?: string;

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
    milliseconds: {
      baseName: "milliseconds",
      type: "number",
      format: "int64",
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      format: "int64",
    },
    times: {
      baseName: "times",
      type: "Array<number>",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return ProductAnalyticsInterval.attributeTypeMap;
  }

  public constructor() {}
}
