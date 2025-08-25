/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyData } from "./EscalationPolicyData";
import { EscalationPolicyIncluded } from "./EscalationPolicyIncluded";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Represents a complete escalation policy response, including policy data and optionally included related resources.
*/
export class EscalationPolicy {
  /**
   * Represents the data for a single escalation policy, including its attributes, ID, relationships, and resource type.
  */
  "data"?: EscalationPolicyData;
  /**
   * Provides any included related resources, such as steps or targets, returned with the policy.
  */
  "included"?: Array<EscalationPolicyIncluded>;

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
    "data": {
      "baseName": "data",
      "type": "EscalationPolicyData",
    },
    "included": {
      "baseName": "included",
      "type": "Array<EscalationPolicyIncluded>",
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




    return EscalationPolicy.attributeTypeMap;

  }

  public constructor() {











  }
}









