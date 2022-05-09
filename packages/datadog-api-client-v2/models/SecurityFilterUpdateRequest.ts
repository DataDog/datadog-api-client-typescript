/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterUpdateData } from "./SecurityFilterUpdateData";

import { AttributeTypeMap } from "../util";

/**
 * The new security filter body.
 */
export class SecurityFilterUpdateRequest {
  /**
   * The new security filter properties.
   */
  "data": SecurityFilterUpdateData;

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
      type: "SecurityFilterUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
