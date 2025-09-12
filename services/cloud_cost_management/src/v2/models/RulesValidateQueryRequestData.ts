import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesValidateQueryRequestDataAttributes } from "./RulesValidateQueryRequestDataAttributes";
import { RulesValidateQueryRequestDataType } from "./RulesValidateQueryRequestDataType";

/**
 * The definition of `RulesValidateQueryRequestData` object.
 */
export class RulesValidateQueryRequestData {
  /**
   * The definition of `RulesValidateQueryRequestDataAttributes` object.
   */
  "attributes"?: RulesValidateQueryRequestDataAttributes;
  /**
   * The `RulesValidateQueryRequestData` `id`.
   */
  "id"?: string;
  /**
   * Validate query resource type.
   */
  "type": RulesValidateQueryRequestDataType;
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
      type: "RulesValidateQueryRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RulesValidateQueryRequestDataType",
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
    return RulesValidateQueryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
