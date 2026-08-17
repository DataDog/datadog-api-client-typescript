import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for requesting per-file code coverage data. Exactly one of `commit_sha`, `branch`, or `pr_number` must be provided. At most one of `service`, `codeowner`, or `flag` may be provided.
 */
export class FilesCoverageRequestAttributes {
  /**
   * The branch name.
   */
  "branch"?: string;
  /**
   * When true, return coverage data only for files that were changed in the specified scope.
   */
  "changedOnly"?: boolean;
  /**
   * Filter coverage by code owner. At most one of `service`, `codeowner`, or `flag` may be provided.
   */
  "codeowner"?: string;
  /**
   * The commit SHA (40-character hexadecimal string).
   */
  "commitSha"?: string;
  /**
   * Filter coverage by coverage flag. At most one of `service`, `codeowner`, or `flag` may be provided.
   */
  "flag"?: string;
  /**
   * The pull request number. Must be a positive integer.
   */
  "prNumber"?: number;
  /**
   * Deprecated: use `repository_url` instead. The repository URL.
   */
  "repositoryId"?: string;
  /**
   * The repository URL. Accepts a full URL with or without a scheme (for example, `https://github.com/org/repo` or `github.com/org/repo`).
   */
  "repositoryUrl"?: string;
  /**
   * Filter coverage by service name. At most one of `service`, `codeowner`, or `flag` may be provided.
   */
  "service"?: string;
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
    branch: {
      baseName: "branch",
      type: "string",
    },
    changedOnly: {
      baseName: "changed_only",
      type: "boolean",
    },
    codeowner: {
      baseName: "codeowner",
      type: "string",
    },
    commitSha: {
      baseName: "commit_sha",
      type: "string",
    },
    flag: {
      baseName: "flag",
      type: "string",
    },
    prNumber: {
      baseName: "pr_number",
      type: "number",
      format: "int64",
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
    },
    repositoryUrl: {
      baseName: "repository_url",
      type: "string",
    },
    service: {
      baseName: "service",
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
    return FilesCoverageRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
