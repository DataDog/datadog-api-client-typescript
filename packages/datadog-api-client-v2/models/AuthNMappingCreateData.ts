/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingCreateAttributes } from "./AuthNMappingCreateAttributes";
import { AuthNMappingCreateRelationships } from "./AuthNMappingCreateRelationships";
import { AuthNMappingsType } from "./AuthNMappingsType";

import { AttributeTypeMap } from "../util";

/**
 * Data for creating an AuthN Mapping.
 */
export class AuthNMappingCreateData {
  /**
   * Key/Value pair of attributes used for create request.
   */
  "attributes"?: AuthNMappingCreateAttributes;
  /**
   * Relationship of AuthN Mapping create object to Role.
   */
  "relationships"?: AuthNMappingCreateRelationships;
  /**
   * AuthN Mappings resource type.
   */
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
