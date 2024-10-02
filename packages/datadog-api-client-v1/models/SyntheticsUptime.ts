/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the uptime information.
 */
export class SyntheticsUptime {
  /**
   * An array of error objects returned while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseErrorWithType>;
  /**
   * The location name
   */
  "group"?: string;
  /**
   * The state transition history for the monitor, represented as an array of
   * pairs. Each pair is an array where the first element is the transition timestamp
   * in Unix epoch format (integer) and the second element is the state (integer).
   * For the state, an integer value of `0` indicates uptime, `1` indicates downtime,
   * and `2` indicates no data.
   */
  "history"?: Array<[number, number]>;
  /**
   * The number of decimal places to which the SLI value is accurate for the given from-to timestamps.
   */
  "spanPrecision"?: number;
  /**
   * The overall uptime.
   */
  "uptime"?: number;

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
    errors: {
      baseName: "errors",
      type: "Array<SLOHistoryResponseErrorWithType>",
    },
    group: {
      baseName: "group",
      type: "string",
    },
    history: {
      baseName: "history",
      type: "Array<[number, number]>",
      format: "double",
    },
    spanPrecision: {
      baseName: "span_precision",
      type: "number",
      format: "double",
    },
    uptime: {
      baseName: "uptime",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsUptime.attributeTypeMap;
  }

  public constructor() {}
}
