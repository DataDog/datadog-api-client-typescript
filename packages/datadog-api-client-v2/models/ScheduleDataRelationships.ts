/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataRelationshipsTeams } from "./DataRelationshipsTeams";
import { ScheduleDataRelationshipsLayers } from "./ScheduleDataRelationshipsLayers";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Groups the relationships for a schedule object, referencing layers and teams.
*/
export class ScheduleDataRelationships {
  /**
   * Associates layers with this schedule in a data structure.
  */
  "layers"?: ScheduleDataRelationshipsLayers;
  /**
   * Associates teams with this schedule in a data structure.
  */
  "teams"?: DataRelationshipsTeams;

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
    "layers": {
      "baseName": "layers",
      "type": "ScheduleDataRelationshipsLayers",
    },
    "teams": {
      "baseName": "teams",
      "type": "DataRelationshipsTeams",
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




    return ScheduleDataRelationships.attributeTypeMap;

  }

  public constructor() {











  }
}









