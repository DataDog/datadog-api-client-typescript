import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataAttributesRulesItemsMapping } from "./DataAttributesRulesItemsMapping";
import { UpdateRulesetRequestDataAttributesRulesItemsQuery } from "./UpdateRulesetRequestDataAttributesRulesItemsQuery";
import { UpdateRulesetRequestDataAttributesRulesItemsReferenceTable } from "./UpdateRulesetRequestDataAttributesRulesItemsReferenceTable";

/**
 * The definition of `UpdateRulesetRequestDataAttributesRulesItems` object.
 */
export class UpdateRulesetRequestDataAttributesRulesItems {
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
   * The definition of `UpdateRulesetRequestDataAttributesRulesItemsQuery` object.
   */
  "query"?: UpdateRulesetRequestDataAttributesRulesItemsQuery;
  /**
   * The definition of `UpdateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
   */
  "referenceTable"?: UpdateRulesetRequestDataAttributesRulesItemsReferenceTable;
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
      type: "UpdateRulesetRequestDataAttributesRulesItemsQuery",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "UpdateRulesetRequestDataAttributesRulesItemsReferenceTable",
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
    return UpdateRulesetRequestDataAttributesRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
