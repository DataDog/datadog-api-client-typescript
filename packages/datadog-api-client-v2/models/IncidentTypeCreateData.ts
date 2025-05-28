/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTypeAttributes } from "./IncidentTypeAttributes";
import { IncidentTypeType } from "./IncidentTypeType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Incident type data for a create request.
*/
export class IncidentTypeCreateData {
  /**
   * Incident type's attributes.
  */
  "attributes": IncidentTypeAttributes;
  /**
   * Incident type resource type.
  */
  "type": IncidentTypeType;

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
      "type": "IncidentTypeAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "IncidentTypeType",
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




    return IncidentTypeCreateData.attributeTypeMap;

  }

  public constructor() {











  }
}









