import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems";

/**
 * The definition of `GetMultipleRulesetsResponseDataAttributesRulesetsItems` object.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItems {
  /**
   * The definition of `GetMultipleRulesetsResponseDataAttributesRulesetsItemsData` object.
   */
  "data": GetMultipleRulesetsResponseDataAttributesRulesetsItemsData;
  /**
   * The `items` `description`.
   */
  "description"?: string;
  /**
   * The `items` `name`.
   */
  "name"?: string;
  /**
   * The `items` `rules`.
   */
  "rules"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>;
  /**
   * The `items` `short_description`.
   */
  "shortDescription"?: string;
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
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsData",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rules: {
      baseName: "rules",
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>",
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItems.attributeTypeMap;
  }

  public constructor() {}
}
