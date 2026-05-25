import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiMemoryViolationType } from "./AiMemoryViolationType";

/**
 * Attributes for creating an AI memory violation result.
 */
export class AiMemoryViolationResultRequestAttributes {
  /**
   * The line number where the violation was found.
   */
  "line": number;
  /**
   * A message explaining the violation result.
   */
  "message": string;
  /**
   * The file path where the violation was found.
   */
  "name": string;
  /**
   * The repository identifier.
   */
  "repositoryId": string;
  /**
   * The rule identifier in the format ruleset/rule.
   */
  "rule": string;
  /**
   * The git commit SHA where the violation was found.
   */
  "sha": string;
  /**
   * The type of AI memory violation result indicating whether it is a true positive or false positive.
   */
  "type": AiMemoryViolationType;
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
    line: {
      baseName: "line",
      type: "number",
      required: true,
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
      required: true,
    },
    rule: {
      baseName: "rule",
      type: "string",
      required: true,
    },
    sha: {
      baseName: "sha",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiMemoryViolationType",
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
    return AiMemoryViolationResultRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
