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
   * For groups in a grouped SLO, this is the group name.
   */
  "group"?: string;
  /**
   * The state transition history for the monitor. It is represented as
   * an array of pairs. Each pair is an array containing the timestamp of the transition
   * as an integer in Unix epoch format in the first element, and the state as an integer in the
   * second element. An integer value of `0` for state means uptime, `1` means downtime, and `2` means no data.
   */
  "history"?: Array<[number, number]>;
  /**
   * The amount of decimal places the SLI value is accurate to for the given from `&&` to timestamp.
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
