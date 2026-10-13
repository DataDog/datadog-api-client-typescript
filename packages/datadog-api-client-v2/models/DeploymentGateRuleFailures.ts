/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGateRuleFailureMonitor } from "./DeploymentGateRuleFailureMonitor";
import { DeploymentGateRuleFailureNarrative } from "./DeploymentGateRuleFailureNarrative";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
