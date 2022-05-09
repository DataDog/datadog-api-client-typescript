/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyCreateData } from "./APIKeyCreateData";

import { AttributeTypeMap } from "../util";

/**
 * Request used to create an API key.
 */
export class APIKeyCreateRequest {
  /**
   * Object used to create an API key.
   */
  "data": APIKeyCreateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "APIKeyCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
