/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterCreateData } from "./SecurityFilterCreateData";

import { AttributeTypeMap } from "../util";

/**
 * Request object that includes the security filter that you would like to create.
 */
export class SecurityFilterCreateRequest {
  /**
   * Object for a single security filter.
   */
  "data": SecurityFilterCreateData;

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
      type: "SecurityFilterCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
