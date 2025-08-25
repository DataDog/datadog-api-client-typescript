/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationRelationshipsResponders } from "./EscalationRelationshipsResponders";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Contains the relationships of an escalation object, including its responders.
*/
export class EscalationRelationships {
  /**
   * Lists the users involved in a specific step of the escalation policy.
  */
  "responders"?: EscalationRelationshipsResponders;

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
    "responders": {
      "baseName": "responders",
      "type": "EscalationRelationshipsResponders",
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




    return EscalationRelationships.attributeTypeMap;

  }

  public constructor() {











  }
}









