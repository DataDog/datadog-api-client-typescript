/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingCreateData } from "./AuthNMappingCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request for creating an AuthN Mapping.
 */
export class AuthNMappingCreateRequest {
  /**
   * Data for creating an AuthN Mapping.
   */
  "data": AuthNMappingCreateData;

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
      type: "AuthNMappingCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
