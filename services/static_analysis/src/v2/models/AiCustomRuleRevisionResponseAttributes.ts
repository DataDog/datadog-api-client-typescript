import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRevisionExecutionMode } from "./AiCustomRuleRevisionExecutionMode";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";

/**
 * Response attributes of an AI custom rule revision.
 */
export class AiCustomRuleRevisionResponseAttributes {
  /**
   * Rule category
   */
  "category": CustomRuleRevisionAttributesCategory;
  /**
   * Checksum of the revision content.
   */
  "checksum": string;
  /**
   * Base64-encoded AI model content for this revision.
   */
  "content": string;
  /**
   * The creation timestamp.
   */
  "createdAt": Date;
  /**
   * The identifier of the user who created the revision.
   */
  "createdBy": string;
  /**
   * The associated CWE identifier.
   */
  "cwe": string | null;
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
   * Whether this is a default Datadog rule.
   */
  "isDefault": boolean;
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
  "versionId": number;
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
    checksum: {
      baseName: "checksum",
      type: "string",
      required: true,
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
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
    isDefault: {
      baseName: "is_default",
      type: "boolean",
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
      required: true,
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
    return AiCustomRuleRevisionResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
