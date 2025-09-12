import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesValidateQueryResponseDataAttributes } from "./RulesValidateQueryResponseDataAttributes";
import { RulesValidateQueryResponseDataType } from "./RulesValidateQueryResponseDataType";

/**
 * The definition of `RulesValidateQueryResponseData` object.
 */
export class RulesValidateQueryResponseData {
  /**
   * The definition of `RulesValidateQueryResponseDataAttributes` object.
   */
  "attributes"?: RulesValidateQueryResponseDataAttributes;
  /**
   * The `RulesValidateQueryResponseData` `id`.
   */
  "id"?: string;
  /**
   * Validate response resource type.
   */
  "type": RulesValidateQueryResponseDataType;
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
      type: "RulesValidateQueryResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RulesValidateQueryResponseDataType",
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
    return RulesValidateQueryResponseData.attributeTypeMap;
  }

  public constructor() {}
}
