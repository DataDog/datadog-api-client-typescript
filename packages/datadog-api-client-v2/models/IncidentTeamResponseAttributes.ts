/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The incident team's attributes from a response.
*/
export class IncidentTeamResponseAttributes {
  /**
   * Timestamp of when the incident team was created.
  */
  "created"?: Date;
  /**
   * Timestamp of when the incident team was modified.
  */
  "modified"?: Date;
  /**
   * Name of the incident team.
  */
  "name"?: string;

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
    "created": {
      "baseName": "created",
      "type": "Date",
      "format": "date-time",
    },
    "modified": {
      "baseName": "modified",
      "type": "Date",
      "format": "date-time",
    },
    "name": {
      "baseName": "name",
      "type": "string",
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




    return IncidentTeamResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









