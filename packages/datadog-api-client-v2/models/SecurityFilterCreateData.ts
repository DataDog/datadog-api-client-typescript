/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterCreateAttributes } from "./SecurityFilterCreateAttributes";
import { SecurityFilterType } from "./SecurityFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single security filter.
 */
export class SecurityFilterCreateData {
  /**
   * Object containing the attributes of the security filter to be created.
   */
  "attributes": SecurityFilterCreateAttributes;
  /**
   * The type of the resource. The value should always be `security_filters`.
   */
  "type": SecurityFilterType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SecurityFilterCreateAttributes",
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
    return SecurityFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
