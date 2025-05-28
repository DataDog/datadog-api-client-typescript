/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoutingRuleRelationshipsPolicy } from "./RoutingRuleRelationshipsPolicy";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Specifies relationships for a routing rule, linking to associated policy resources.
*/
export class RoutingRuleRelationships {
  /**
   * Defines the relationship that links a routing rule to a policy.
  */
  "policy"?: RoutingRuleRelationshipsPolicy;

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
    "policy": {
      "baseName": "policy",
      "type": "RoutingRuleRelationshipsPolicy",
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




    return RoutingRuleRelationships.attributeTypeMap;

  }

  public constructor() {











  }
}









