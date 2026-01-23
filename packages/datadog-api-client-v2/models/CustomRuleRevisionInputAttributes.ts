/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Argument } from "./Argument";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";
import { CustomRuleRevisionTest } from "./CustomRuleRevisionTest";
import { Language } from "./Language";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class CustomRuleRevisionInputAttributes {
  /**
   * Rule arguments
   */
  "arguments": Array<Argument>;
  /**
   * Rule category
   */
  "category": CustomRuleRevisionAttributesCategory;
  /**
   * Rule code
   */
  "code": string;
  /**
   * Revision creation message
   */
  "creationMessage": string;
  /**
   * Associated CVE
   */
  "cve": string | null;
  /**
   * Associated CWE
   */
  "cwe": string | null;
  /**
   * Full description
   */
  "description": string;
  /**
   * Documentation URL
   */
  "documentationUrl": string | null;
  /**
   * Whether the revision is published
   */
  "isPublished": boolean;
  /**
   * Whether this is a testing revision
   */
  "isTesting": boolean;
  /**
   * Programming language
   */
  "language": Language;
  /**
   * Rule severity
   */
  "severity": CustomRuleRevisionAttributesSeverity;
  /**
   * Short description
   */
  "shortDescription": string;
  /**
   * Whether to use AI for fixes
   */
  "shouldUseAiFix": boolean;
  /**
   * Rule tags
   */
  "tags": Array<string>;
  /**
   * Rule tests
   */
  "tests": Array<CustomRuleRevisionTest>;
  /**
   * Tree-sitter query
   */
  "treeSitterQuery": string;

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
      type: "Array<Argument>",
      required: true,
    },
    category: {
      baseName: "category",
      type: "CustomRuleRevisionAttributesCategory",
      required: true,
    },
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    creationMessage: {
      baseName: "creation_message",
      type: "string",
      required: true,
    },
    cve: {
      baseName: "cve",
      type: "string",
      required: true,
    },
    cwe: {
      baseName: "cwe",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    documentationUrl: {
      baseName: "documentation_url",
      type: "string",
      required: true,
    },
    isPublished: {
      baseName: "is_published",
      type: "boolean",
      required: true,
    },
    isTesting: {
      baseName: "is_testing",
      type: "boolean",
      required: true,
    },
    language: {
      baseName: "language",
      type: "Language",
      required: true,
    },
    severity: {
      baseName: "severity",
      type: "CustomRuleRevisionAttributesSeverity",
      required: true,
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
      required: true,
    },
    shouldUseAiFix: {
      baseName: "should_use_ai_fix",
      type: "boolean",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    tests: {
      baseName: "tests",
      type: "Array<CustomRuleRevisionTest>",
      required: true,
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
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
    return CustomRuleRevisionInputAttributes.attributeTypeMap;
  }

  public constructor() {}
}
