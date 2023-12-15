/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Git info for DORA Metrics events.
 */
export class DORAGitInfo {
  /**
   * Git Commit SHA.
   */
  "commitSha": string;
  /**
   * Git Repository URL
   */
  "repositoryUrl": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    commitSha: {
      baseName: "commit_sha",
      type: "string",
      required: true,
    },
    repositoryUrl: {
      baseName: "repository_url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAGitInfo.attributeTypeMap;
  }

  public constructor() {}
}
