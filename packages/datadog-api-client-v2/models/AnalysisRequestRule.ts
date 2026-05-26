/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A static analysis rule to apply during code analysis.
 */
export class AnalysisRequestRule {
  /**
   * The category of the rule (for example, `BEST_PRACTICES`, `SECURITY`).
   */
  "category": string;
  /**
   * A checksum of the rule definition.
   */
  "checksum": string;
  /**
   * The base64-encoded rule implementation code.
   */
  "code": string;
  /**
   * The code entity type checked by the rule, applicable when rule type is `AST_CHECK`.
   */
  "entityChecked"?: string;
  /**
   * The unique identifier of the rule.
   */
  "id": string;
  /**
   * The programming language this rule targets.
   */
  "language": string;
  /**
   * A base64-encoded regex pattern used by the rule, applicable when rule type is `REGEX`.
   */
  "regex"?: string;
  /**
   * The severity of findings from this rule (for example, `ERROR`, `WARNING`).
   */
  "severity": string;
  /**
   * The base64-encoded tree-sitter query used by the rule.
   */
  "treeSitterQuery": string;
  /**
   * The rule type indicating the detection mechanism (for example, `TREE_SITTER_QUERY`).
   */
  "type": string;

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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    checksum: {
      baseName: "checksum",
      type: "string",
      required: true,
    },
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    entityChecked: {
      baseName: "entity_checked",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    language: {
      baseName: "language",
      type: "string",
      required: true,
    },
    regex: {
      baseName: "regex",
      type: "string",
    },
    severity: {
      baseName: "severity",
      type: "string",
      required: true,
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return AnalysisRequestRule.attributeTypeMap;
  }

  public constructor() {}
}
