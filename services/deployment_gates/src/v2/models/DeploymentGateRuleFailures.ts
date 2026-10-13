import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateRuleFailureMonitor } from "./DeploymentGateRuleFailureMonitor";
import { DeploymentGateRuleFailureNarrative } from "./DeploymentGateRuleFailureNarrative";

/**
 * Rule failure details.
 */
export class DeploymentGateRuleFailures {
  /**
   * Names of faulty APM resources.
   */
  "faultyApmResources": Array<string>;
  "monitors": Array<DeploymentGateRuleFailureMonitor>;
  "narratives": Array<DeploymentGateRuleFailureNarrative>;
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
    faultyApmResources: {
      baseName: "faulty_apm_resources",
      type: "Array<string>",
      required: true,
    },
    monitors: {
      baseName: "monitors",
      type: "Array<DeploymentGateRuleFailureMonitor>",
      required: true,
    },
    narratives: {
      baseName: "narratives",
      type: "Array<DeploymentGateRuleFailureNarrative>",
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
    return DeploymentGateRuleFailures.attributeTypeMap;
  }

  public constructor() {}
}
