/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyResponseIncludedItem } from "./APIKeyResponseIncludedItem";
import { FullAPIKey } from "./FullAPIKey";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving an API key.
 */
export class APIKeyResponse {
  /**
   * Datadog API key.
   */
  "data"?: FullAPIKey;
  /**
   * Array of objects related to the API key.
   */
  "included"?: Array<APIKeyResponseIncludedItem>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "FullAPIKey",
    },
    included: {
      baseName: "included",
      type: "Array<APIKeyResponseIncludedItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
