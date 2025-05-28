/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceResponseAttributes } from "./IncidentServiceResponseAttributes";
import { IncidentServiceType } from "./IncidentServiceType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Incident Service data from responses.
*/
export class IncidentServiceResponseData {
  /**
   * The incident service's attributes from a response.
  */
  "attributes"?: IncidentServiceResponseAttributes;
  /**
   * The incident service's ID.
  */
  "id": string;
  /**
   * The incident service's relationships.
  */
  "relationships"?: IncidentServiceRelationships;
  /**
   * Incident service resource type.
  */
  "type": IncidentServiceType;

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
      "type": "IncidentServiceResponseAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "IncidentServiceRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "IncidentServiceType",
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




    return IncidentServiceResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









