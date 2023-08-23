/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingsType } from "./AuthNMappingsType";
import { AuthNMappingUpdateAttributes } from "./AuthNMappingUpdateAttributes";
import { AuthNMappingUpdateRelationships } from "./AuthNMappingUpdateRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating an AuthN Mapping.
 */
export class AuthNMappingUpdateData {
  /**
   * Key/Value pair of attributes used for update request.
   */
  "attributes"?: AuthNMappingUpdateAttributes;
  /**
   * ID of the AuthN Mapping.
   */
  "id": string;
  /**
   * Relationship of AuthN Mapping update object to Role.
   */
  "relationships"?: AuthNMappingUpdateRelationships;
  /**
   * AuthN Mappings resource type.
   */
  "type": AuthNMappingsType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "AuthNMappingUpdateAttributes",
    },
    id: {
      type: "string",
      required: true,
    },
    relationships: {
      type: "AuthNMappingUpdateRelationships",
    },
    type: {
      type: "AuthNMappingsType",
      required: true,
    },
  };
}
