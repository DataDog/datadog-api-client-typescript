import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
   * The `query` `if_not_exists`.
   */
  "ifNotExists": boolean;
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
      required: true,
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
