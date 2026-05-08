/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplayAnalysisAffectedSession } from "./ReplayAnalysisAffectedSession";
import { ReplayAnalysisRepresentativeSession } from "./ReplayAnalysisRepresentativeSession";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a RUM replay analysis issue.
 */
export class ReplayAnalysisIssueDataAttributes {
  /**
   * Up to three sample sessions affected by this issue.
   */
  "affectedSessions": Array<ReplayAnalysisAffectedSession>;
  /**
   * Unique identifier of the application where the issue was detected.
   */
  "applicationId": string;
  /**
   * Timestamp when the issue was first detected.
   */
  "createdAt": Date;
  /**
   * Human-readable description of the issue.
   */
  "description": string;
  /**
   * Journey query associated with the issue.
   */
  "journeyQuery"?: { [key: string]: any };
  /**
   * Name of the issue.
   */
  "name": string;
  /**
   * A representative session illustrating a replay analysis issue.
   */
  "representativeSession": ReplayAnalysisRepresentativeSession;
  /**
   * Total number of sessions affected by this issue.
   */
  "sessionCount": number;
  /**
   * Severity level of the issue. Valid values are `high`, `medium`, and `low`.
   */
  "severity": string;
  /**
   * Timestamp when the issue was last updated.
   */
  "updatedAt": Date;
  /**
   * Validation status of the issue.
   */
  "validationVerdict": string;

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
    affectedSessions: {
      baseName: "affected_sessions",
      type: "Array<ReplayAnalysisAffectedSession>",
      required: true,
    },
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    journeyQuery: {
      baseName: "journey_query",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    representativeSession: {
      baseName: "representative_session",
      type: "ReplayAnalysisRepresentativeSession",
      required: true,
    },
    sessionCount: {
      baseName: "session_count",
      type: "number",
      required: true,
      format: "int64",
    },
    severity: {
      baseName: "severity",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    validationVerdict: {
      baseName: "validation_verdict",
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
    return ReplayAnalysisIssueDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
