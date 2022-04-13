/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthNMappingCreateAttributes } from "./AuthNMappingCreateAttributes";
import { AuthNMappingCreateRelationships } from "./AuthNMappingCreateRelationships";
import { AuthNMappingsType } from "./AuthNMappingsType";
import { AttributeTypeMap } from "../util";

/**
 * Data for creating an AuthN Mapping.
 */

export class AuthNMappingCreateData {
  "attributes"?: AuthNMappingCreateAttributes;
  "relationships"?: AuthNMappingCreateRelationships;
  "type": AuthNMappingsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "AuthNMappingCreateAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "AuthNMappingCreateRelationships",
    },
    type: {
      baseName: "type",
      type: "AuthNMappingsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
