import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRulesetRequestDataAttributesRulesItemsQueryAddition } from "./CreateRulesetRequestDataAttributesRulesItemsQueryAddition";
import { DataAttributesRulesItemsIfTagExists } from "./DataAttributesRulesItemsIfTagExists";

/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsQuery` object.
 */
export class CreateRulesetRequestDataAttributesRulesItemsQuery {
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsQueryAddition` object.
   */
  "addition": CreateRulesetRequestDataAttributesRulesItemsQueryAddition | null;
  /**
   * The `query` `case_insensitivity`.
   */
  "caseInsensitivity"?: boolean;
  /**
   * Deprecated. Use `if_tag_exists` instead. The `query` `if_not_exists`.
   */
  "ifNotExists"?: boolean;
  /**
   * The behavior when the tag already exists.
   */
  "ifTagExists"?: DataAttributesRulesItemsIfTagExists;
  /**
   * The `query` `query`.
   */
  "query": string;
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
    addition: {
      baseName: "addition",
      type: "CreateRulesetRequestDataAttributesRulesItemsQueryAddition",
      required: true,
    },
    caseInsensitivity: {
      baseName: "case_insensitivity",
      type: "boolean",
    },
    ifNotExists: {
      baseName: "if_not_exists",
      type: "boolean",
    },
    ifTagExists: {
      baseName: "if_tag_exists",
      type: "DataAttributesRulesItemsIfTagExists",
    },
    query: {
      baseName: "query",
      type: "string",
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
    return CreateRulesetRequestDataAttributesRulesItemsQuery.attributeTypeMap;
  }

  public constructor() {}
}
