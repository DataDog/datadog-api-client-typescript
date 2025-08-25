/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentTeamIncludedItems } from "./IncidentTeamIncludedItems";
import { IncidentTeamResponseData } from "./IncidentTeamResponseData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response with a list of incident team payloads.
*/
export class IncidentTeamsResponse {
  /**
   * An array of incident teams.
  */
  "data": Array<IncidentTeamResponseData>;
  /**
   * Included related resources which the user requested.
  */
  "included"?: Array<IncidentTeamIncludedItems>;
  /**
   * The metadata object containing pagination metadata.
  */
  "meta"?: IncidentResponseMeta;

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
      "type": "Array<IncidentTeamResponseData>",
      "required": true,
    },
    "included": {
      "baseName": "included",
      "type": "Array<IncidentTeamIncludedItems>",
    },
    "meta": {
      "baseName": "meta",
      "type": "IncidentResponseMeta",
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




    return IncidentTeamsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









