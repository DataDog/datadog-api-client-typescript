/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGateRuleEvaluationConfiguration } from "./DeploymentGateRuleEvaluationConfiguration";
import { DeploymentGateRuleEvaluationType } from "./DeploymentGateRuleEvaluationType";
import { DeploymentGateRuleFailures } from "./DeploymentGateRuleFailures";
import { DeploymentGatesEvaluationResultResponseAttributesGateStatus } from "./DeploymentGatesEvaluationResultResponseAttributesGateStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a deployment gate rule evaluation.
 */
export class DeploymentGateRuleEvaluationAttributes {
  /**
   * Evaluated rule configuration. Fields depend on rule type and unset fields are omitted.
   * Monitor rules can include `duration`, `query`, `monitor_ids`, `warmup`, `fail_on_no_groups_found`, and `fail_on_no_data`.
   * Faulty deployment detection rules can include `duration`, `allowed_resources`, and `excluded_resources`.
   */
  "configuration": DeploymentGateRuleEvaluationConfiguration;
  /**
   * Whether this rule is non-enforcing. A failed dry-run rule is ignored when computing the gate outcome. Independent of `gate_dry_run`.
   */
  "dryRun": boolean;
  /**
   * Rule evaluation duration in seconds. Null while it is in progress.
   */
  "durationSeconds": number | null;
  /**
   * Evaluated environment.
   */
  "env": string;
  /**
   * Rule evaluation UUID. Matches the resource `id`.
   */
  "evaluationId": string;
  /**
   * Rule failure details.
   */
  "failures": DeploymentGateRuleFailures;
  /**
   * Time the rule evaluation finished. Null while it is in progress.
   */
  "finishedAt": Date | null;
  /**
   * Whether the parent gate is dry-run. A failed dry-run gate blocks but does not stop deployment. Independent of rule-level `dry_run`.
   */
  "gateDryRun": boolean;
  /**
   * Deployment gate evaluation UUID.
   */
  "gateEvaluationId": string;
  /**
   * Configured deployment gate UUID. Null for just-in-time evaluations.
   */
  "gateId": string | null;
  /**
   * Deployment gate identifier.
   */
  "identifier": string;
  /**
   * Rule name.
   */
  "name": string;
  /**
   * Reason for the rule result.
   */
  "reason": string;
  /**
   * Configured deployment rule UUID. Null for just-in-time rules.
   */
  "ruleId": string | null;
  /**
   * Evaluated service.
   */
  "service": string;
  /**
   * Time the rule evaluation started.
   */
  "startedAt": Date;
  /**
   * The recorded result of a gate or rule evaluation.
   * - `in_progress`: The evaluation is still running.
   * - `pass`: All rules passed successfully.
   * - `fail`: One or more rules did not pass.
   */
  "status": DeploymentGatesEvaluationResultResponseAttributesGateStatus;
  /**
   * Type of deployment gate rule.
   */
  "type": DeploymentGateRuleEvaluationType;
  /**
   * Evaluated deployment version. Empty when no version was provided.
   */
  "version": string;

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
    configuration: {
      baseName: "configuration",
      type: "DeploymentGateRuleEvaluationConfiguration",
      required: true,
    },
    dryRun: {
      baseName: "dry_run",
      type: "boolean",
      required: true,
    },
    durationSeconds: {
      baseName: "duration_seconds",
      type: "number",
      required: true,
      format: "int64",
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    evaluationId: {
      baseName: "evaluation_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    failures: {
      baseName: "failures",
      type: "DeploymentGateRuleFailures",
      required: true,
    },
    finishedAt: {
      baseName: "finished_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    gateDryRun: {
      baseName: "gate_dry_run",
      type: "boolean",
      required: true,
    },
    gateEvaluationId: {
      baseName: "gate_evaluation_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    gateId: {
      baseName: "gate_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "string",
      required: true,
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "DeploymentGatesEvaluationResultResponseAttributesGateStatus",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentGateRuleEvaluationType",
      required: true,
    },
    version: {
      baseName: "version",
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
    return DeploymentGateRuleEvaluationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
