/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApiKey } from "./ApiKey";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * List of API and application keys available for a given organization.
 */
export class ApiKeyListResponse {
  /**
   * Array of API keys.
   */
  "apiKeys"?: Array<ApiKey>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKeys: {
      baseName: "api_keys",
      type: "Array<ApiKey>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiKeyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
