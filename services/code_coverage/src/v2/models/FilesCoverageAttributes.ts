import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FileCoverageLines } from "./FileCoverageLines";

/**
 * Attributes of the per-file code coverage response.
 */
export class FilesCoverageAttributes {
  /**
   * The SHA of the base commit used for comparison (for example, the merge base for a PR).
   */
  "baseCommitSha"?: string;
  /**
   * Unix timestamp (milliseconds) of the coverage event.
   */
  "eventTimestamp"?: number;
  /**
   * Map of file paths to per-file coverage line data.
   */
  "files"?: { [key: string]: FileCoverageLines };
  /**
   * The SHA of the head commit for which coverage was evaluated.
   */
  "headCommitSha"?: string;
  /**
   * Number of coverage reports evaluated.
   */
  "reportCount"?: number;
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
    baseCommitSha: {
      baseName: "base_commit_sha",
      type: "string",
    },
    eventTimestamp: {
      baseName: "event_timestamp",
      type: "number",
      format: "int64",
    },
    files: {
      baseName: "files",
      type: "{ [key: string]: FileCoverageLines; }",
    },
    headCommitSha: {
      baseName: "head_commit_sha",
      type: "string",
    },
    reportCount: {
      baseName: "report_count",
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
    return FilesCoverageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
