/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyDataRelationshipsStepsDataItemsType } from "./EscalationPolicyDataRelationshipsStepsDataItemsType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Defines a relationship to a single step within an escalation policy. Contains the step's `id` and `type`.
*/
export class EscalationPolicyDataRelationshipsStepsDataItems {
  /**
   * Specifies the unique identifier for the step resource.
  */
  "id": string;
  /**
   * Indicates that the resource is of type `steps`.
  */
  "type": EscalationPolicyDataRelationshipsStepsDataItemsType;

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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "EscalationPolicyDataRelationshipsStepsDataItemsType",
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




    return EscalationPolicyDataRelationshipsStepsDataItems.attributeTypeMap;

  }

  public constructor() {











  }
}









