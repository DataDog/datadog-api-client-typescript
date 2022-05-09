/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMapping } from "./AuthNMapping";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";

import { AttributeTypeMap } from "../util";

/**
 * Array of AuthN Mappings response.
 */
export class AuthNMappingsResponse {
  /**
   * Array of returned AuthN Mappings.
   */
  "data"?: Array<AuthNMapping>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;

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
      type: "Array<AuthNMapping>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
