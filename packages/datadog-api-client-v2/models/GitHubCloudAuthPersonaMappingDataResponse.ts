/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCloudAuthPersonaMappingAttributesResponse } from "./GitHubCloudAuthPersonaMappingAttributesResponse";
import { GitHubCloudAuthPersonaMappingType } from "./GitHubCloudAuthPersonaMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for GitHub cloud authentication persona mapping response.
 */
export class GitHubCloudAuthPersonaMappingDataResponse {
  /**
   * Attributes for GitHub cloud authentication persona mapping response.
   */
  "attributes": GitHubCloudAuthPersonaMappingAttributesResponse;
  /**
   * Unique identifier for the persona mapping.
   */
  "id": string;
  /**
   * Type identifier for GitHub cloud authentication persona mapping.
   */
  "type": GitHubCloudAuthPersonaMappingType;

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
    attributes: {
      baseName: "attributes",
      type: "GitHubCloudAuthPersonaMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GitHubCloudAuthPersonaMappingType",
      required: true,
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
    return GitHubCloudAuthPersonaMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
