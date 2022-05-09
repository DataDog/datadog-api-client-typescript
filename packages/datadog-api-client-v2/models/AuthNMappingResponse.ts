/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMapping } from "./AuthNMapping";

import { AttributeTypeMap } from "../util";

/**
 * AuthN Mapping response from the API.
 */
export class AuthNMappingResponse {
  /**
   * The AuthN Mapping object returned by API.
   */
  "data"?: AuthNMapping;

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
      type: "AuthNMapping",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
