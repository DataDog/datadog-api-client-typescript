import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems";

/**
 * The definition of `GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems` object.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems {
  /**
   * The `items` `arguments`.
   */
  "arguments"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>;
  /**
   * The `items` `category`.
   */
  "category"?: string;
  /**
   * The `items` `checksum`.
   */
  "checksum"?: string;
  /**
   * The `items` `code`.
   */
  "code"?: string;
  /**
   * The `items` `created_at`.
   */
  "createdAt"?: Date;
  /**
   * The `items` `created_by`.
   */
  "createdBy"?: string;
  /**
   * The `items` `cve`.
   */
  "cve"?: string;
  /**
   * The `items` `cwe`.
   */
  "cwe"?: string;
  /**
   * The definition of `GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData` object.
   */
  "data": GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData;
  /**
   * The `items` `description`.
   */
  "description"?: string;
  /**
   * The `items` `documentation_url`.
   */
  "documentationUrl"?: string;
  /**
   * The `items` `entity_checked`.
   */
  "entityChecked"?: string;
  /**
   * The `items` `is_published`.
   */
  "isPublished"?: boolean;
  /**
   * The `items` `is_testing`.
   */
  "isTesting"?: boolean;
  /**
   * The `items` `language`.
   */
  "language"?: string;
  /**
   * The `items` `last_updated_at`.
   */
  "lastUpdatedAt"?: Date;
  /**
   * The `items` `last_updated_by`.
   */
  "lastUpdatedBy"?: string;
  /**
   * The `items` `name`.
   */
  "name"?: string;
  /**
   * The `items` `regex`.
   */
  "regex"?: string;
  /**
   * The `items` `severity`.
   */
  "severity"?: string;
  /**
   * The `items` `short_description`.
   */
  "shortDescription"?: string;
  /**
   * The `items` `should_use_ai_fix`.
   */
  "shouldUseAiFix"?: boolean;
  /**
   * The `items` `tests`.
   */
  "tests"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>;
  /**
   * The `items` `tree_sitter_query`.
   */
  "treeSitterQuery"?: string;
  /**
   * The `items` `type`.
   */
  "type"?: string;
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
    arguments: {
      baseName: "arguments",
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>",
    },
    category: {
      baseName: "category",
      type: "string",
    },
    checksum: {
      baseName: "checksum",
      type: "string",
    },
    code: {
      baseName: "code",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    cve: {
      baseName: "cve",
      type: "string",
    },
    cwe: {
      baseName: "cwe",
      type: "string",
    },
    data: {
      baseName: "data",
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    documentationUrl: {
      baseName: "documentation_url",
      type: "string",
    },
    entityChecked: {
      baseName: "entity_checked",
      type: "string",
    },
    isPublished: {
      baseName: "is_published",
      type: "boolean",
    },
    isTesting: {
      baseName: "is_testing",
      type: "boolean",
    },
    language: {
      baseName: "language",
      type: "string",
    },
    lastUpdatedAt: {
      baseName: "last_updated_at",
      type: "Date",
      format: "date-time",
    },
    lastUpdatedBy: {
      baseName: "last_updated_by",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    regex: {
      baseName: "regex",
      type: "string",
    },
    severity: {
      baseName: "severity",
      type: "string",
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
    },
    shouldUseAiFix: {
      baseName: "should_use_ai_fix",
      type: "boolean",
    },
    tests: {
      baseName: "tests",
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>",
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
