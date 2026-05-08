/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplayAnalysisSignal } from "./ReplayAnalysisSignal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a session related to a RUM replay analysis issue.
 */
export class ReplayAnalysisIssueSessionDataAttributes {
  /**
   * Session start timestamp in milliseconds.
   */
  "sessionStartTimestampMs": number;
  /**
   * List of signals observed in this session.
   */
  "signals": Array<ReplayAnalysisSignal>;
  /**
   * Name of the view where the issue was observed.
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
    sessionStartTimestampMs: {
      baseName: "session_start_timestamp_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    signals: {
      baseName: "signals",
      type: "Array<ReplayAnalysisSignal>",
      required: true,
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
    return ReplayAnalysisIssueSessionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
