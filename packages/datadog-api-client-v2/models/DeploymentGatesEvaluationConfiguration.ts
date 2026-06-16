/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesEvaluationRule } from "./DeploymentGatesEvaluationRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Inline rule definitions for a deployment gate evaluation. When provided, rules are evaluated
 * directly from this configuration instead of using the preconfigured gate rules.
 * At least one rule is required.
 */
export class DeploymentGatesEvaluationConfiguration {
  /**
   * Gate-level dry run. When enabled, the rules are evaluated normally but the gate always returns `pass`. The real result is visible in the Datadog UI.
   */
  "dryRun"?: boolean;
  /**
   * The list of rules to evaluate. At least one rule is required.
   */
  "rules": Array<DeploymentGatesEvaluationRule>;

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
    rules: {
      baseName: "rules",
      type: "Array<DeploymentGatesEvaluationRule>",
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
    return DeploymentGatesEvaluationConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
