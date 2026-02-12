import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataAttributesRulesItemsIfTagExists } from "./DataAttributesRulesItemsIfTagExists";
import { RulesetRespDataAttributesRulesItemsQueryAddition } from "./RulesetRespDataAttributesRulesItemsQueryAddition";

/**
 * The definition of `RulesetRespDataAttributesRulesItemsQuery` object.
 */
export class RulesetRespDataAttributesRulesItemsQuery {
  /**
   * The definition of `RulesetRespDataAttributesRulesItemsQueryAddition` object.
   */
  "addition": RulesetRespDataAttributesRulesItemsQueryAddition | null;
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
      type: "RulesetRespDataAttributesRulesItemsQueryAddition",
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
    return RulesetRespDataAttributesRulesItemsQuery.attributeTypeMap;
  }

  public constructor() {}
}
