/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamAttributes } from "./TeamAttributes";
import { TeamRelationships } from "./TeamRelationships";
import { TeamType } from "./TeamType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A team
*/
export class Team {
  /**
   * Team attributes
  */
  "attributes": TeamAttributes;
  /**
   * The team's identifier
  */
  "id": string;
  /**
   * Resources related to a team
  */
  "relationships"?: TeamRelationships;
  /**
   * Team type
  */
  "type": TeamType;

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
      "type": "TeamAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "TeamRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "TeamType",
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




    return Team.attributeTypeMap;

  }

  public constructor() {











  }
}









