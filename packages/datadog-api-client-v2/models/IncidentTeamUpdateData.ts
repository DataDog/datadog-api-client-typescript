/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTeamRelationships } from "./IncidentTeamRelationships";
import { IncidentTeamType } from "./IncidentTeamType";
import { IncidentTeamUpdateAttributes } from "./IncidentTeamUpdateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Incident Team data for an update request.
*/
export class IncidentTeamUpdateData {
  /**
   * The incident team's attributes for an update request.
  */
  "attributes"?: IncidentTeamUpdateAttributes;
  /**
   * The incident team's ID.
  */
  "id"?: string;
  /**
   * The incident team's relationships.
  */
  "relationships"?: IncidentTeamRelationships;
  /**
   * Incident Team resource type.
  */
  "type": IncidentTeamType;

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
      "type": "IncidentTeamUpdateAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "IncidentTeamRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "IncidentTeamType",
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




    return IncidentTeamUpdateData.attributeTypeMap;

  }

  public constructor() {











  }
}









