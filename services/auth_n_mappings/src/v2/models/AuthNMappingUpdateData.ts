import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuthNMappingsType } from "./AuthNMappingsType";
import { AuthNMappingUpdateAttributes } from "./AuthNMappingUpdateAttributes";
import { AuthNMappingUpdateRelationships } from "./AuthNMappingUpdateRelationships";

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
   * Relationship of AuthN Mapping update object to a Role or Team.
   */
  "relationships"?: AuthNMappingUpdateRelationships;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
