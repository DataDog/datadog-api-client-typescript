import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabFacetKeysAttributes } from "./ModelLabFacetKeysAttributes";
import { ModelLabFacetKeysType } from "./ModelLabFacetKeysType";

/**
 * A facet keys JSON:API resource object.
 */
export class ModelLabFacetKeysData {
  /**
   * Available facet key names for filtering resources.
   */
  "attributes": ModelLabFacetKeysAttributes;
  /**
   * The unique identifier of the facet keys resource.
   */
  "id": string;
  /**
   * The JSON:API type for a facet keys resource.
   */
  "type": ModelLabFacetKeysType;
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
      type: "ModelLabFacetKeysAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ModelLabFacetKeysType",
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
    return ModelLabFacetKeysData.attributeTypeMap;
  }

  public constructor() {}
}
