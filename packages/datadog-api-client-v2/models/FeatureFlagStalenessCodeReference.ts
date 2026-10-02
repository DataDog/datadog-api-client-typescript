/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A repository and its files that reference the feature flag.
 */
export class FeatureFlagStalenessCodeReference {
  /**
   * Paths of files that reference the feature flag in this repository.
   */
  "files"?: Array<string>;
  /**
   * The URL of the source code repository, when available.
   */
  "repoUrl"?: string;
  /**
   * The identifier of the source code repository.
   */
  "scmRepositoryId"?: string;

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
    files: {
      baseName: "files",
      type: "Array<string>",
    },
    repoUrl: {
      baseName: "repo_url",
      type: "string",
    },
    scmRepositoryId: {
      baseName: "scm_repository_id",
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
    return FeatureFlagStalenessCodeReference.attributeTypeMap;
  }

  public constructor() {}
}
