/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems {
  "arguments"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>;
  "category"?: string;
  "checksum"?: string;
  "code"?: string;
  "createdAt"?: Date;
  "createdBy"?: string;
  "cve"?: string;
  "cwe"?: string;
  "data": GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData;
  "description"?: string;
  "documentationUrl"?: string;
  "entityChecked"?: string;
  "isPublished"?: boolean;
  "isTesting"?: boolean;
  "language"?: string;
  "lastUpdatedAt"?: Date;
  "lastUpdatedBy"?: string;
  "name"?: string;
  "regex"?: string;
  "severity"?: string;
  "shortDescription"?: string;
  "shouldUseAiFix"?: boolean;
  "tests"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>;
  "treeSitterQuery"?: string;
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
