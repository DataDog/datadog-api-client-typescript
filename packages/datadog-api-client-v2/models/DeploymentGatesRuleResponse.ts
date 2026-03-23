/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesEvaluationResultResponseAttributesGateStatus } from "./DeploymentGatesEvaluationResultResponseAttributesGateStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The result of a single rule evaluation.
 */
export class DeploymentGatesRuleResponse {
  /**
   * Whether this rule was evaluated in dry-run mode.
   */
  "dryRun"?: boolean;
  /**
   * The name of the rule.
   */
  "name"?: string;
  /**
   * The reason for the rule result, if applicable.
   */
  "reason"?: string;
  /**
   * The overall status of the gate evaluation.
   * - `in_progress`: The evaluation is still running.
   * - `pass`: All rules passed successfully and the deployment is allowed to proceed.
   * - `fail`: One or more rules did not pass; the deployment should not proceed.
   */
  "status"?: DeploymentGatesEvaluationResultResponseAttributesGateStatus;

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
    },
    name: {
      baseName: "name",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "DeploymentGatesEvaluationResultResponseAttributesGateStatus",
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
    return DeploymentGatesRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
