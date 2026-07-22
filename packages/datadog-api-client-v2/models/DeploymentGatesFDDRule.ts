/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesFDDRuleOptions } from "./DeploymentGatesFDDRuleOptions";
import { DeploymentGatesFDDRuleType } from "./DeploymentGatesFDDRuleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A faulty deployment detection rule to evaluate as part of a deployment gate evaluation.
*/
export class DeploymentGatesFDDRule {
  /**
   * Rule-level dry run. When enabled, the rule is evaluated normally but it always returns `pass`. The real result is visible in the Datadog UI.
  */
  "dryRun"?: boolean;
  /**
   * Human-readable name for this rule.
  */
  "name": string;
  /**
   * Options for a `faulty_deployment_detection` rule.
  */
  "options"?: DeploymentGatesFDDRuleOptions;
  /**
   * The type identifier for a faulty deployment detection rule.
  */
  "type": DeploymentGatesFDDRuleType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "dryRun": {
      "baseName": "dry_run",
      "type": "boolean",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "options": {
      "baseName": "options",
      "type": "DeploymentGatesFDDRuleOptions",
    },
    "type": {
      "baseName": "type",
      "type": "DeploymentGatesFDDRuleType",
      "required": true,
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




    return DeploymentGatesFDDRule.attributeTypeMap;

  }

  public constructor() {











  }
}









