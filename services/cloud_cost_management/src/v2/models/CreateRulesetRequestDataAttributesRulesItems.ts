import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRulesetRequestDataAttributesRulesItemsQuery } from "./CreateRulesetRequestDataAttributesRulesItemsQuery";
import { CreateRulesetRequestDataAttributesRulesItemsReferenceTable } from "./CreateRulesetRequestDataAttributesRulesItemsReferenceTable";
import { DataAttributesRulesItemsMapping } from "./DataAttributesRulesItemsMapping";

/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItems` object.
 */
export class CreateRulesetRequestDataAttributesRulesItems {
  /**
   * The `items` `enabled`.
   */
  "enabled": boolean;
  /**
   * The definition of `DataAttributesRulesItemsMapping` object.
   */
  "mapping"?: DataAttributesRulesItemsMapping;
  /**
   * The `items` `metadata`.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The `items` `name`.
   */
  "name": string;
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsQuery` object.
   */
  "query"?: CreateRulesetRequestDataAttributesRulesItemsQuery;
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
   */
  "referenceTable"?: CreateRulesetRequestDataAttributesRulesItemsReferenceTable;
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
      type: "DataAttributesRulesItemsMapping",
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
      type: "CreateRulesetRequestDataAttributesRulesItemsQuery",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "CreateRulesetRequestDataAttributesRulesItemsReferenceTable",
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
    return CreateRulesetRequestDataAttributesRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
