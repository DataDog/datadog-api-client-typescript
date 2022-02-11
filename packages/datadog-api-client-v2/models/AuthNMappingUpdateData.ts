/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthNMappingUpdateAttributes } from "./AuthNMappingUpdateAttributes";
import { AuthNMappingUpdateRelationships } from "./AuthNMappingUpdateRelationships";
import { AuthNMappingsType } from "./AuthNMappingsType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Data for updating an AuthN Mapping.
 */

export class AuthNMappingUpdateData {
  "attributes"?: AuthNMappingUpdateAttributes;
  /**
   * ID of the AuthN Mapping.
   */
  "id": string;
  "relationships"?: AuthNMappingUpdateRelationships;
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
      type: "AuthNMappingUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AuthNMappingUpdateRelationships",
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
    return AuthNMappingUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
