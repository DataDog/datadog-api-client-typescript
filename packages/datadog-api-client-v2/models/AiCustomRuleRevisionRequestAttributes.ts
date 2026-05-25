/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiCustomRuleRevisionExecutionMode } from "./AiCustomRuleRevisionExecutionMode";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an AI custom rule revision.
 */
export class AiCustomRuleRevisionRequestAttributes {
  /**
   * Rule category
   */
  "category": CustomRuleRevisionAttributesCategory;
  /**
   * Base64-encoded AI model content for this revision.
   */
  "content": string;
  /**
   * The associated CWE identifier.
   */
  "cwe"?: string;
  /**
   * Base64-encoded full description.
   */
  "description": string;
  /**
   * Directory patterns this rule applies to.
   */
  "directories": Array<string>;
  /**
   * The execution mode for an AI rule revision.
   */
  "executionMode": AiCustomRuleRevisionExecutionMode;
  /**
   * File glob patterns this rule applies to.
   */
  "globs": Array<string>;
  /**
   * Whether this revision is published.
   */
  "isPublished": boolean;
  /**
   * Whether this revision is for testing only.
   */
  "isTesting": boolean;
  /**
   * Rule severity
   */
  "severity": CustomRuleRevisionAttributesSeverity;
  /**
   * Base64-encoded short description.
   */
  "shortDescription": string;
  /**
   * The version identifier for this revision.
   */
  "versionId"?: number;

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
      type: "CustomRuleRevisionAttributesCategory",
      required: true,
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    cwe: {
      baseName: "cwe",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    directories: {
      baseName: "directories",
      type: "Array<string>",
      required: true,
    },
    executionMode: {
      baseName: "execution_mode",
      type: "AiCustomRuleRevisionExecutionMode",
      required: true,
    },
    globs: {
      baseName: "globs",
      type: "Array<string>",
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
    versionId: {
      baseName: "version_id",
      type: "number",
      format: "int64",
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
    return AiCustomRuleRevisionRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
