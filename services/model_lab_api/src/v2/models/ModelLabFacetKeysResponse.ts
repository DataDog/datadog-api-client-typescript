import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabFacetKeysData } from "./ModelLabFacetKeysData";

/**
 * Response containing available facet keys.
 */
export class ModelLabFacetKeysResponse {
  /**
   * A facet keys JSON:API resource object.
   */
  "data": ModelLabFacetKeysData;
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
    data: {
      baseName: "data",
      type: "ModelLabFacetKeysData",
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
    return ModelLabFacetKeysResponse.attributeTypeMap;
  }

  public constructor() {}
}
