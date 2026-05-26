import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetAstRequestDataAttributes } from "./GetAstRequestDataAttributes";
import { GetAstRequestDataType } from "./GetAstRequestDataType";

/**
 * The primary data object in the get-AST request.
 */
export class GetAstRequestData {
  /**
   * The attributes of the get-AST request, containing the source code to parse.
   */
  "attributes": GetAstRequestDataAttributes;
  /**
   * An optional identifier for the get-AST request resource.
   */
  "id"?: string;
  /**
   * Get AST request resource type.
   */
  "type": GetAstRequestDataType;
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
      type: "GetAstRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetAstRequestDataType",
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
    return GetAstRequestData.attributeTypeMap;
  }

  public constructor() {}
}
