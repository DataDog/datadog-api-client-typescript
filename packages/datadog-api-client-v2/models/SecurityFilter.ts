/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilterAttributes } from "./SecurityFilterAttributes";
import { SecurityFilterType } from "./SecurityFilterType";

export class SecurityFilter {
  "attributes"?: SecurityFilterAttributes;
  /**
   * The ID of the security filter.
   */
  "id"?: string;
  "type"?: SecurityFilterType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "SecurityFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilter.attributeTypeMap;
  }

  public constructor() {}
}
