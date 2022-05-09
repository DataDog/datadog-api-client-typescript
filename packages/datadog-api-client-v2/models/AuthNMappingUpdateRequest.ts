/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingUpdateData } from "./AuthNMappingUpdateData";

import { AttributeTypeMap } from "../util";

/**
 * Request to update an AuthN Mapping.
 */
export class AuthNMappingUpdateRequest {
  /**
   * Data for updating an AuthN Mapping.
   */
  "data": AuthNMappingUpdateData;

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
      type: "AuthNMappingUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
