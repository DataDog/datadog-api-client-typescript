/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingCreateAttributes } from "./AuthNMappingCreateAttributes";
import { AuthNMappingCreateRelationships } from "./AuthNMappingCreateRelationships";
import { AuthNMappingsType } from "./AuthNMappingsType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data for creating an AuthN Mapping.
*/
export class AuthNMappingCreateData {
  /**
   * Key/Value pair of attributes used for create request.
  */
  "attributes"?: AuthNMappingCreateAttributes;
  /**
   * Relationship of AuthN Mapping create object to a Role or Team.
  */
  "relationships"?: AuthNMappingCreateRelationships;
  /**
   * AuthN Mappings resource type.
  */
  "type": AuthNMappingsType;

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
      "type": "AuthNMappingCreateAttributes",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "AuthNMappingCreateRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "AuthNMappingsType",
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




    return AuthNMappingCreateData.attributeTypeMap;

  }

  public constructor() {











  }
}









