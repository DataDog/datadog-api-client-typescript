/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentPolicyCreateAttributes } from "./CloudWorkloadSecurityAgentPolicyCreateAttributes";
import { CloudWorkloadSecurityAgentPolicyType } from "./CloudWorkloadSecurityAgentPolicyType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object for a single Agent rule
*/
export class CloudWorkloadSecurityAgentPolicyCreateData {
  /**
   * Create a new Cloud Workload Security Agent policy
  */
  "attributes": CloudWorkloadSecurityAgentPolicyCreateAttributes;
  /**
   * The type of the resource, must always be `policy`
  */
  "type": CloudWorkloadSecurityAgentPolicyType;

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
      "type": "CloudWorkloadSecurityAgentPolicyCreateAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CloudWorkloadSecurityAgentPolicyType",
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




    return CloudWorkloadSecurityAgentPolicyCreateData.attributeTypeMap;

  }

  public constructor() {











  }
}









