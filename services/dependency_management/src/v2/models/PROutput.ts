import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PROutputCiStatus } from "./PROutputCiStatus";
import { PROutputStatus } from "./PROutputStatus";

/**
 * A pull request created by the dependency upgrade automation.
 */
export class PROutput {
  /**
   * The aggregate CI check status for the pull request.
   */
  "ciStatus"?: PROutputCiStatus;
  /**
   * The pull request number.
   */
  "prNumber"?: number;
  /**
   * The URL of the pull request.
   */
  "prUrl": string;
  /**
   * The repository name in owner/repo format.
   */
  "repository"?: string;
  /**
   * The current status of the pull request.
   */
  "status"?: PROutputStatus;
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
    ciStatus: {
      baseName: "ci_status",
      type: "PROutputCiStatus",
    },
    prNumber: {
      baseName: "pr_number",
      type: "number",
      format: "int64",
    },
    prUrl: {
      baseName: "pr_url",
      type: "string",
      required: true,
    },
    repository: {
      baseName: "repository",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "PROutputStatus",
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
    return PROutput.attributeTypeMap;
  }

  public constructor() {}
}
