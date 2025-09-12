import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetRespDataAttributesRulesItemsMapping } from "./RulesetRespDataAttributesRulesItemsMapping";
import { RulesetRespDataAttributesRulesItemsQuery } from "./RulesetRespDataAttributesRulesItemsQuery";
import { RulesetRespDataAttributesRulesItemsReferenceTable } from "./RulesetRespDataAttributesRulesItemsReferenceTable";

/**
 * The definition of `RulesetRespDataAttributesRulesItems` object.
 */
export class RulesetRespDataAttributesRulesItems {
  /**
   * The `items` `enabled`.
   */
  "enabled": boolean;
  /**
   * The definition of `RulesetRespDataAttributesRulesItemsMapping` object.
   */
  "mapping"?: RulesetRespDataAttributesRulesItemsMapping;
  /**
   * The `items` `metadata`.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The `items` `name`.
   */
  "name": string;
  /**
   * The definition of `RulesetRespDataAttributesRulesItemsQuery` object.
   */
  "query"?: RulesetRespDataAttributesRulesItemsQuery;
  /**
   * The definition of `RulesetRespDataAttributesRulesItemsReferenceTable` object.
   */
  "referenceTable"?: RulesetRespDataAttributesRulesItemsReferenceTable;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    mapping: {
      baseName: "mapping",
      type: "RulesetRespDataAttributesRulesItemsMapping",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "RulesetRespDataAttributesRulesItemsQuery",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "RulesetRespDataAttributesRulesItemsReferenceTable",
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
    return RulesetRespDataAttributesRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
