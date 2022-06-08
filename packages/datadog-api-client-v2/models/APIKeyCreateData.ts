/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyCreateAttributes } from "./APIKeyCreateAttributes";
import { APIKeysType } from "./APIKeysType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object used to create an API key.
 */
export class APIKeyCreateData {
  /**
   * Attributes used to create an API Key.
   */
  "attributes": APIKeyCreateAttributes;
  /**
   * API Keys resource type.
   */
  "type": APIKeysType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "APIKeyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
