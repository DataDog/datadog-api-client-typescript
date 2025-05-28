/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamRoutingRulesDataRelationships } from "./TeamRoutingRulesDataRelationships";
import { TeamRoutingRulesDataType } from "./TeamRoutingRulesDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Represents the top-level data object for team routing rules, containing the ID, relationships, and resource type.
*/
export class TeamRoutingRulesData {
  /**
   * Specifies the unique identifier of this team routing rules record.
  */
  "id"?: string;
  /**
   * Specifies relationships for team routing rules, including rule references.
  */
  "relationships"?: TeamRoutingRulesDataRelationships;
  /**
   * Team routing rules resource type.
  */
  "type": TeamRoutingRulesDataType;

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
    },
    "relationships": {
      "baseName": "relationships",
      "type": "TeamRoutingRulesDataRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "TeamRoutingRulesDataType",
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




    return TeamRoutingRulesData.attributeTypeMap;

  }

  public constructor() {











  }
}









