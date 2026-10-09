/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesEvaluationResultResponseAttributesGateStatus } from "./DeploymentGatesEvaluationResultResponseAttributesGateStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a deployment gate evaluation.
 */
export class DeploymentGateEvaluationAttributes {
  /**
   * Whether this evaluation used gate-level dry run.
   */
  "dryRun": boolean;
  /**
   * Evaluation duration in seconds. Null while it is in progress.
   */
  "durationSeconds": number | null;
  /**
   * Deployment environment evaluated by the gate.
   */
  "env": string;
  /**
   * Gate evaluation UUID. Matches the resource `id`.
   */
  "evaluationId": string;
  /**
   * Time the evaluation finished. Null while it is in progress.
   */
  "finishedAt": Date | null;
  /**
   * Configured deployment gate UUID. Null for just-in-time evaluations.
   */
  "gateId": string | null;
  /**
   * Deployment gate identifier.
   */
  "identifier": string;
  /**
   * Service evaluated by the deployment gate.
   */
  "service": string;
  /**
   * Time the evaluation started.
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
    finishedAt: {
      baseName: "finished_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return DeploymentGateEvaluationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
