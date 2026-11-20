/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * A package to update in a repository, for a group of library vulnerabilities (`sca.package_update`). The group
 * gathers the open vulnerabilities of direct dependencies that have a recommended fix, and groups them by
 * `@git.repository_id`, `@vulnerability.stack.ecosystem`, and `@remediation.recommended.name`.
 */
export class RemediationGroupPackageUpdate {
  /**
   * Number of distinct values of `@advisory.id` across the group's findings.
   */
  "advisoryCount": Int64;
  /**
   * Package ecosystem, the findings' `@vulnerability.stack.ecosystem`.
   */
  "ecosystem": string;
  /**
   * Number of distinct values of `@advisory.id` across the group's findings that have
   * `@risk.has_exploit_available` set to `true`.
   */
  "exploitableCveCount": Int64;
  /**
   * Number of distinct values of `@package.declaration.block.filename`, the files that declare the package.
   */
  "fileCount": Int64;
  /**
   * Name of the package to update, the findings' `@remediation.recommended.name`.
   */
  "packageName": string;
  /**
   * Repository that depends on the package, the findings' `@git.repository_id`.
   */
  "repositoryId": string;
  /**
   * Version to update the package to, the highest `@remediation.recommended.version` across the group's
   * findings. Omitted when no version is recommended or when the recommended versions can't be ordered.
   */
  "targetVersion"?: string;

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
    advisoryCount: {
      baseName: "advisory_count",
      type: "number",
      required: true,
      format: "int64",
    },
    ecosystem: {
      baseName: "ecosystem",
      type: "string",
      required: true,
    },
    exploitableCveCount: {
      baseName: "exploitable_cve_count",
      type: "number",
      required: true,
      format: "int64",
    },
    fileCount: {
      baseName: "file_count",
      type: "number",
      required: true,
      format: "int64",
    },
    packageName: {
      baseName: "package_name",
      type: "string",
      required: true,
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
      required: true,
    },
    targetVersion: {
      baseName: "target_version",
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
    return RemediationGroupPackageUpdate.attributeTypeMap;
  }

  public constructor() {}
}
