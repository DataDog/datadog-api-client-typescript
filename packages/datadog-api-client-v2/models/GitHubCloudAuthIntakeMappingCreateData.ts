/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCloudAuthIntakeMappingCreateAttributes } from "./GitHubCloudAuthIntakeMappingCreateAttributes";
import { GitHubCloudAuthIntakeMappingType } from "./GitHubCloudAuthIntakeMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a GitHub cloud authentication intake mapping.
 */
export class GitHubCloudAuthIntakeMappingCreateData {
  /**
   * Attributes for creating a GitHub cloud authentication intake mapping
   */
  "attributes": GitHubCloudAuthIntakeMappingCreateAttributes;
  /**
   * Type identifier for GitHub cloud authentication intake mapping.
   */
  "type": GitHubCloudAuthIntakeMappingType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "GitHubCloudAuthIntakeMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthIntakeMappingType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthIntakeMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
