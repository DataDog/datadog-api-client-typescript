/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingAttributes } from "./AuthNMappingAttributes";
import { AuthNMappingRelationships } from "./AuthNMappingRelationships";
import { AuthNMappingsType } from "./AuthNMappingsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The AuthN Mapping object returned by API.
 */
export class AuthNMapping {
  /**
   * Attributes of AuthN Mapping.
   */
  "attributes"?: AuthNMappingAttributes;
  /**
   * ID of the AuthN Mapping.
   */
  "id": string;
  /**
   * All relationships associated with AuthN Mapping.
   */
  "relationships"?: AuthNMappingRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "AuthNMappingAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AuthNMappingRelationships",
    },
    type: {
      baseName: "type",
      type: "AuthNMappingsType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMapping.attributeTypeMap;
  }

  public constructor() {}
}
