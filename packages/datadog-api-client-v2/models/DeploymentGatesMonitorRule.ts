/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesMonitorRuleOptions } from "./DeploymentGatesMonitorRuleOptions";
import { DeploymentGatesMonitorRuleType } from "./DeploymentGatesMonitorRuleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A monitor rule to evaluate as part of a deployment gate evaluation.
*/
export class DeploymentGatesMonitorRule {
  /**
   * Rule-level dry run. When enabled, the rule is evaluated normally but always returns `pass`. The real result is visible in the Datadog UI.
  */
  "dryRun"?: boolean;
  /**
   * Human-readable name for this rule.
  */
  "name": string;
  /**
   * Options for a `monitor` rule.
  */
  "options"?: DeploymentGatesMonitorRuleOptions;
  /**
   * The type identifier for a monitor rule.
  */
  "type": DeploymentGatesMonitorRuleType;

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
      "type": "DeploymentGatesMonitorRuleOptions",
    },
    "type": {
      "baseName": "type",
      "type": "DeploymentGatesMonitorRuleType",
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




    return DeploymentGatesMonitorRule.attributeTypeMap;

  }

  public constructor() {











  }
}









