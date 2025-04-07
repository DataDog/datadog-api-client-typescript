import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateOpenAPIResponseAttributes } from "./UpdateOpenAPIResponseAttributes";

/**
 * Data envelope for `UpdateOpenAPIResponse`.
 */
export class UpdateOpenAPIResponseData {
  /**
   * Attributes for `UpdateOpenAPI`.
   */
  "attributes"?: UpdateOpenAPIResponseAttributes;
  /**
   * API identifier.
   */
  "id"?: string;
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
      type: "UpdateOpenAPIResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
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
    return UpdateOpenAPIResponseData.attributeTypeMap;
  }

  public constructor() {}
}
