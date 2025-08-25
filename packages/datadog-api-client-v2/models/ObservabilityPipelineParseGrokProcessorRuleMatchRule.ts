/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Defines a Grok parsing rule, which extracts structured fields from log content using named Grok patterns.
 * Each rule must have a unique name and a valid Datadog Grok pattern that will be applied to the source field.
*/
export class ObservabilityPipelineParseGrokProcessorRuleMatchRule {
  /**
   * The name of the rule.
  */
  "name": string;
  /**
   * The definition of the Grok rule.
  */
  "rule": string;

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
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "rule": {
      "baseName": "rule",
      "type": "string",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ObservabilityPipelineParseGrokProcessorRuleMatchRule.attributeTypeMap;

  }

  public constructor() {











  }
}









