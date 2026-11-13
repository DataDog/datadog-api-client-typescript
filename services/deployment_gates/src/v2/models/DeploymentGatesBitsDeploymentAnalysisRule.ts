import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesBitsDeploymentAnalysisRuleOptions } from "./DeploymentGatesBitsDeploymentAnalysisRuleOptions";
import { DeploymentGatesBitsDeploymentAnalysisRuleType } from "./DeploymentGatesBitsDeploymentAnalysisRuleType";

/**
 * A Bits Deployment Analysis rule to evaluate as part of a deployment gate evaluation.
 */
export class DeploymentGatesBitsDeploymentAnalysisRule {
  /**
   * Rule-level dry run. When enabled, the rule is evaluated normally but it always returns `pass`. The real result is visible in the Datadog UI.
   */
  "dryRun"?: boolean;
  /**
   * Human-readable name for this rule.
   */
  "name": string;
  /**
   * Options for a `bits_deployment_analysis` rule.
   */
  "options"?: DeploymentGatesBitsDeploymentAnalysisRuleOptions;
  /**
   * The type identifier for a Bits Deployment Analysis rule.
   */
  "type": DeploymentGatesBitsDeploymentAnalysisRuleType;
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
      required: true,
    },
    options: {
      baseName: "options",
      type: "DeploymentGatesBitsDeploymentAnalysisRuleOptions",
    },
    type: {
      baseName: "type",
      type: "DeploymentGatesBitsDeploymentAnalysisRuleType",
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
    return DeploymentGatesBitsDeploymentAnalysisRule.attributeTypeMap;
  }

  public constructor() {}
}
