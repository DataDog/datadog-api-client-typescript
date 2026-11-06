import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthPersonaMappingCreateAttributes } from "./OIDCCloudAuthPersonaMappingCreateAttributes";
import { OIDCCloudAuthPersonaMappingType } from "./OIDCCloudAuthPersonaMappingType";

/**
 * Custom OIDC persona mapping creation data.
 */
export class OIDCCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating a Custom OIDC persona mapping.
   */
  "attributes": OIDCCloudAuthPersonaMappingCreateAttributes;
  /**
   * Resource type returned by the existing Custom OIDC persona mapping API.
   */
  "type": OIDCCloudAuthPersonaMappingType;
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
      type: "OIDCCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OIDCCloudAuthPersonaMappingType",
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
    return OIDCCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
