/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterAttributes } from "./SecurityFilterAttributes";
import { SecurityFilterType } from "./SecurityFilterType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The security filter's properties.
 */
export class SecurityFilter {
  /**
   * The object describing a security filter.
   */
  "attributes"?: SecurityFilterAttributes;
  /**
   * The ID of the security filter.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `security_filters`.
   */
  "type"?: SecurityFilterType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilter.attributeTypeMap;
  }

  public constructor() {}
}
