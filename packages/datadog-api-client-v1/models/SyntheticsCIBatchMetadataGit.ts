/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Git information.
 */
export class SyntheticsCIBatchMetadataGit {
  /**
   * Branch name.
   */
  "branch"?: string;
  /**
   * The commit SHA.
   */
  "commitSha"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    branch: {
      type: "string",
    },
    commitSha: {
      type: "string",
    },
  };
}
