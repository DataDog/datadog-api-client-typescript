import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetAstResponseDataAttributes } from "./GetAstResponseDataAttributes";
import { GetAstResponseDataType } from "./GetAstResponseDataType";

/**
 * The primary data object in the get-AST response.
 */
export class GetAstResponseData {
  /**
   * The attributes of the get-AST response, containing the parsed abstract syntax tree.
   */
  "attributes": GetAstResponseDataAttributes;
  /**
   * The identifier of the get-AST response resource.
   */
  "id"?: string;
  /**
   * Get AST response resource type.
   */
  "type": GetAstResponseDataType;
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
      type: "GetAstResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetAstResponseDataType",
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
    return GetAstResponseData.attributeTypeMap;
  }

  public constructor() {}
}
