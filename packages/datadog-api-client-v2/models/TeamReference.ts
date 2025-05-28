/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamReferenceAttributes } from "./TeamReferenceAttributes";
import { TeamReferenceType } from "./TeamReferenceType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Provides a reference to a team, including ID, type, and basic attributes/relationships.
*/
export class TeamReference {
  /**
   * Encapsulates the basic attributes of a Team reference, such as name, handle, and an optional avatar or description.
  */
  "attributes"?: TeamReferenceAttributes;
  /**
   * The team's unique identifier.
  */
  "id"?: string;
  /**
   * Teams resource type.
  */
  "type": TeamReferenceType;

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
      "type": "TeamReferenceAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "TeamReferenceType",
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




    return TeamReference.attributeTypeMap;

  }

  public constructor() {











  }
}









