/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Location of a stack frame in a repository file. Empty when the source code is unavailable.
 */
export class IssueSampleGitFileLocation {
  /**
   * Column of the location, starting at 1.
   */
  "column"?: number;
  /**
   * Path of the file in the repository.
   */
  "filepath"?: string;
  /**
   * First line of the location, starting at 1.
   */
  "firstLine"?: number;
  /**
   * Last line of the location, starting at 1.
   */
  "lastLine"?: number;
  /**
   * Git reference of the file, usually a commit SHA.
   */
  "ref"?: string;
  /**
   * Repository identifier.
   */
  "repoId"?: string;

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
    column: {
      baseName: "column",
      type: "number",
      format: "int64",
    },
    filepath: {
      baseName: "filepath",
      type: "string",
    },
    firstLine: {
      baseName: "first_line",
      type: "number",
      format: "int64",
    },
    lastLine: {
      baseName: "last_line",
      type: "number",
      format: "int64",
    },
    ref: {
      baseName: "ref",
      type: "string",
    },
    repoId: {
      baseName: "repo_id",
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
    return IssueSampleGitFileLocation.attributeTypeMap;
  }

  public constructor() {}
}
