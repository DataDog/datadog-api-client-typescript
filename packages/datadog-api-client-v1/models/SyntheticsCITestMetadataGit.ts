/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Git information.
 */

export class SyntheticsCITestMetadataGit {
  /**
   * Branch name.
   */
  "branch"?: string;
  /**
   * Commit SHA.
   */
  "commitSha"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    branch: {
      baseName: "branch",
      type: "string",
      format: "",
    },
    commitSha: {
      baseName: "commit_sha",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsCITestMetadataGit.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsCITestMetadataGit {
    const res = new SyntheticsCITestMetadataGit();

    res.branch = ObjectSerializer.deserialize(data.branch, "string", "");

    res.commitSha = ObjectSerializer.deserialize(data.commit_sha, "string", "");

    return res;
  }

  static serialize(data: SyntheticsCITestMetadataGit): { [key: string]: any } {
    const attributeTypes = SyntheticsCITestMetadataGit.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.branch = ObjectSerializer.serialize(data.branch, "string", "");

    res.commit_sha = ObjectSerializer.serialize(data.commitSha, "string", "");

    return res;
  }

  public constructor() {}
}
