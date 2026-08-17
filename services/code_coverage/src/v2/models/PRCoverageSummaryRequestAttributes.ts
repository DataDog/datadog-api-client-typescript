import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for requesting code coverage summary for a pull request.
 */
export class PRCoverageSummaryRequestAttributes {
  /**
   * The pull request number. Must be a positive integer.
   */
  "prNumber": number;
  /**
   * The repository URL. Accepts a full URL with or without a scheme (for example, `https://github.com/org/repo` or `github.com/org/repo`).
   */
  "repositoryUrl": string;
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
    prNumber: {
      baseName: "pr_number",
      type: "number",
      required: true,
      format: "int64",
    },
    repositoryUrl: {
      baseName: "repository_url",
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
    return PRCoverageSummaryRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
