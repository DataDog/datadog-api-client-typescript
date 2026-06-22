/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RemediationCodeSession } from "./RemediationCodeSession";
import { RemediationEcsMetadata } from "./RemediationEcsMetadata";
import { RemediationGuardrailDecision } from "./RemediationGuardrailDecision";
import { RemediationHistoryEvent } from "./RemediationHistoryEvent";
import { RemediationInvestigationStatus } from "./RemediationInvestigationStatus";
import { RemediationPlan } from "./RemediationPlan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single ECS remediation investigation: a detected issue together with its proposed plan, history, and ECS workload metadata.
 */
export class RemediationInvestigation {
  /**
   * A linked code session (for example, a pull request) for the investigation.
   */
  "codeSession"?: RemediationCodeSession;
  /**
   * Creation time in epoch milliseconds (64-bit integer encoded as a string).
   */
  "createdAtMs"?: string;
  /**
   * The guardrail decision applied to a plan or investigation.
   */
  "guardrailDecision"?: RemediationGuardrailDecision;
  /**
   * Ordered list of history events for the investigation.
   */
  "history"?: Array<RemediationHistoryEvent>;
  /**
   * Unique investigation ID.
   */
  "id"?: string;
  /**
   * The detected issue type.
   */
  "issueType"?: string;
  /**
   * Time of the last action in epoch milliseconds (64-bit integer encoded as a string).
   */
  "lastActionAtMs"?: string;
  /**
   * ECS-specific context for the investigation.
   */
  "metadata"?: RemediationEcsMetadata;
  /**
   * Datadog organization ID that owns the investigation (64-bit integer encoded as a string).
   */
  "orgId"?: string;
  /**
   * The remediation plan proposed by the ECS remediation agent.
   */
  "plan"?: RemediationPlan;
  /**
   * ARN of the ECS resource the investigation is about.
   */
  "resourceArn"?: string;
  /**
   * Investigation status.
   */
  "status"?: RemediationInvestigationStatus;
  /**
   * Last update time in epoch milliseconds (64-bit integer encoded as a string).
   */
  "updatedAtMs"?: string;

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
    codeSession: {
      baseName: "code_session",
      type: "RemediationCodeSession",
    },
    createdAtMs: {
      baseName: "created_at_ms",
      type: "string",
    },
    guardrailDecision: {
      baseName: "guardrail_decision",
      type: "RemediationGuardrailDecision",
    },
    history: {
      baseName: "history",
      type: "Array<RemediationHistoryEvent>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    issueType: {
      baseName: "issue_type",
      type: "string",
    },
    lastActionAtMs: {
      baseName: "last_action_at_ms",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "RemediationEcsMetadata",
    },
    orgId: {
      baseName: "org_id",
      type: "string",
    },
    plan: {
      baseName: "plan",
      type: "RemediationPlan",
    },
    resourceArn: {
      baseName: "resource_arn",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "RemediationInvestigationStatus",
    },
    updatedAtMs: {
      baseName: "updated_at_ms",
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
    return RemediationInvestigation.attributeTypeMap;
  }

  public constructor() {}
}
