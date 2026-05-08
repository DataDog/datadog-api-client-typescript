/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplayAnalysisLLMDetails } from "./ReplayAnalysisLLMDetails";
import { ReplayAnalysisScreenshot } from "./ReplayAnalysisScreenshot";
import { ReplayAnalysisSignal } from "./ReplayAnalysisSignal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A representative session illustrating a replay analysis issue.
 */
export class ReplayAnalysisRepresentativeSession {
  /**
   * Category of the issue observed in this session.
   */
  "issueCategory": string;
  /**
   * AI-generated analysis details for a replay issue.
   */
  "llmAnalysisDetails": ReplayAnalysisLLMDetails;
  /**
   * A screenshot captured during a replay session.
   */
  "screenshot"?: ReplayAnalysisScreenshot;
  /**
   * Unique identifier of the representative session.
   */
  "sessionId": string;
  /**
   * Session start timestamp in milliseconds.
   */
  "sessionStartTimestampMs": number;
  /**
   * List of signals observed in the representative session.
   */
  "signals": Array<ReplayAnalysisSignal>;
  /**
   * Name of the view where the issue was observed.
   */
  "viewName"?: string;

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
    issueCategory: {
      baseName: "issue_category",
      type: "string",
      required: true,
    },
    llmAnalysisDetails: {
      baseName: "llm_analysis_details",
      type: "ReplayAnalysisLLMDetails",
      required: true,
    },
    screenshot: {
      baseName: "screenshot",
      type: "ReplayAnalysisScreenshot",
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
      required: true,
    },
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
    return ReplayAnalysisRepresentativeSession.attributeTypeMap;
  }

  public constructor() {}
}
