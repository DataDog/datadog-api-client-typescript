import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems } from "./CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems";
import { DataAttributesRulesItemsIfTagExists } from "./DataAttributesRulesItemsIfTagExists";

/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
 */
export class CreateRulesetRequestDataAttributesRulesItemsReferenceTable {
  /**
   * The `reference_table` `case_insensitivity`.
   */
  "caseInsensitivity"?: boolean;
  /**
   * The `reference_table` `field_pairs`.
   */
  "fieldPairs": Array<CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems>;
  /**
   * Deprecated. Use `if_tag_exists` instead. The `reference_table` `if_not_exists`.
   */
  "ifNotExists"?: boolean;
  /**
   * The behavior when the tag already exists.
   */
  "ifTagExists"?: DataAttributesRulesItemsIfTagExists;
  /**
   * The `reference_table` `source_keys`.
   */
  "sourceKeys": Array<string>;
  /**
   * The `reference_table` `table_name`.
   */
  "tableName": string;
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
    caseInsensitivity: {
      baseName: "case_insensitivity",
      type: "boolean",
    },
    fieldPairs: {
      baseName: "field_pairs",
      type: "Array<CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems>",
      required: true,
    },
    ifNotExists: {
      baseName: "if_not_exists",
      type: "boolean",
    },
    ifTagExists: {
      baseName: "if_tag_exists",
      type: "DataAttributesRulesItemsIfTagExists",
    },
    sourceKeys: {
      baseName: "source_keys",
      type: "Array<string>",
      required: true,
    },
    tableName: {
      baseName: "table_name",
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
    return CreateRulesetRequestDataAttributesRulesItemsReferenceTable.attributeTypeMap;
  }

  public constructor() {}
}
