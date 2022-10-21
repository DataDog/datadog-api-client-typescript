/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterType } from "./SecurityFilterType";
import { SecurityFilterUpdateAttributes } from "./SecurityFilterUpdateAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new security filter properties.
 */
export class SecurityFilterUpdateData {
  /**
   * The security filters properties to be updated.
   */
  "attributes": SecurityFilterUpdateAttributes;
  /**
   * The type of the resource. The value should always be `security_filters`.
   */
  "type": SecurityFilterType;

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
      type: "SecurityFilterUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
