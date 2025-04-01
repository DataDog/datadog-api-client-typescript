/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentType } from "./IncidentType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Incident data for a create request.
*/
export class IncidentCreateData {
  /**
   * The incident's attributes for a create request.
  */
  "attributes": IncidentCreateAttributes;
  /**
   * The relationships the incident will have with other resources once created.
  */
  "relationships"?: IncidentCreateRelationships;
  /**
   * Incident resource type.
  */
  "type": IncidentType;

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
      "type": "IncidentCreateAttributes",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "IncidentCreateRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "IncidentType",
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




    return IncidentCreateData.attributeTypeMap;

  }

  public constructor() {











  }
}









