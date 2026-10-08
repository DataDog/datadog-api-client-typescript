/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCloudAuthPersonaMappingCreateAttributes } from "./GitHubCloudAuthPersonaMappingCreateAttributes";
import { GitHubCloudAuthPersonaMappingType } from "./GitHubCloudAuthPersonaMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a GitHub cloud authentication persona mapping.
 */
export class GitHubCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating a GitHub cloud authentication persona mapping.
   */
  "attributes": GitHubCloudAuthPersonaMappingCreateAttributes;
  /**
   * Type identifier for GitHub cloud authentication persona mapping.
   */
  "type": GitHubCloudAuthPersonaMappingType;

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
      type: "GitHubCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthPersonaMappingType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
