/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCloudAuthIntakeMappingCreateData } from "./GitHubCloudAuthIntakeMappingCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request used to create a GitHub cloud authentication intake mapping.
 */
export class GitHubCloudAuthIntakeMappingCreateRequest {
  /**
   * Data for creating a GitHub cloud authentication intake mapping.
   */
  "data": GitHubCloudAuthIntakeMappingCreateData;

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
      type: "GitHubCloudAuthIntakeMappingCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubCloudAuthIntakeMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
