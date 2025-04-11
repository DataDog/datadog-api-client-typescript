import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuthNMappingAttributes } from "./AuthNMappingAttributes";
import { AuthNMappingRelationships } from "./AuthNMappingRelationships";
import { AuthNMappingsType } from "./AuthNMappingsType";

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
      type: "{ [key: string]: any; }",
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
