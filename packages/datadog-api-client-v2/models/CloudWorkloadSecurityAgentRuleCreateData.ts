/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleCreateAttributes } from "./CloudWorkloadSecurityAgentRuleCreateAttributes";
import { CloudWorkloadSecurityAgentRuleType } from "./CloudWorkloadSecurityAgentRuleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object for a single Agent rule.
*/
export class CloudWorkloadSecurityAgentRuleCreateData {
  /**
   * Create a new Cloud Workload Security Agent rule.
  */
  "attributes": CloudWorkloadSecurityAgentRuleCreateAttributes;
  /**
   * The type of the resource. The value should always be `agent_rule`.
  */
  "type": CloudWorkloadSecurityAgentRuleType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "CloudWorkloadSecurityAgentRuleCreateAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CloudWorkloadSecurityAgentRuleType",
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




    return CloudWorkloadSecurityAgentRuleCreateData.attributeTypeMap;

  }

  public constructor() {











  }
}









