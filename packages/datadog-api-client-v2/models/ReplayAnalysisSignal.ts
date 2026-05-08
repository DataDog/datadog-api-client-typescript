/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A signal associated with a replay issue, capturing user interaction details.
 */
export class ReplayAnalysisSignal {
  /**
   * Event name associated with the signal.
   */
  "event": string;
  /**
   * Type of signal captured.
   */
  "signalType": string;
  /**
   * Absolute timestamp of the signal in milliseconds.
   */
  "timestampMs": number;
  /**
   * User behavior pattern identified for the signal.
   */
  "userPattern": string;

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
    event: {
      baseName: "event",
      type: "string",
      required: true,
    },
    signalType: {
      baseName: "signal_type",
      type: "string",
      required: true,
    },
    timestampMs: {
      baseName: "timestamp_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    userPattern: {
      baseName: "user_pattern",
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
    return ReplayAnalysisSignal.attributeTypeMap;
  }

  public constructor() {}
}
