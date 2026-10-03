/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCloudAuthPersonaMappingCreateData } from "./GitHubCloudAuthPersonaMappingCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request used to create a GitHub cloud authentication persona mapping.
 */
export class GitHubCloudAuthPersonaMappingCreateRequest {
  /**
   * Data for creating a GitHub cloud authentication persona mapping.
   */
  "data": GitHubCloudAuthPersonaMappingCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "GitHubCloudAuthPersonaMappingCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthPersonaMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
