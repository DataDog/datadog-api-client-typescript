import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiMemoryViolationType } from "./AiMemoryViolationType";

/**
 * Response attributes of an AI memory violation result.
 */
export class AiMemoryViolationResultResponseAttributes {
  /**
   * The creation timestamp.
   */
  "createdAt": Date;
  /**
   * The identifier of the user who created the result.
   */
  "createdBy": string;
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
    return AiMemoryViolationResultResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
