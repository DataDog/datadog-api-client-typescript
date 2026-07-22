/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutomationRuleActorType } from "./AutomationRuleActorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The user or Datadog system who created the rule.
*/
export class AutomationRuleCreatedBy {
  /**
   * The actor's identifier (a user UUID or a system identifier).
  */
  "id": string;
  /**
   * The name of the actor.
  */
  "name": string;
  /**
   * Whether the actor is a user or the Datadog system.
  */
  "type": AutomationRuleActorType;

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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "AutomationRuleActorType",
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




    return AutomationRuleCreatedBy.attributeTypeMap;

  }

  public constructor() {











  }
}









