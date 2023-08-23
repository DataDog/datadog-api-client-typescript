/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterType } from "./SecurityFilterType";
import { SecurityFilterUpdateAttributes } from "./SecurityFilterUpdateAttributes";

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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "SecurityFilterUpdateAttributes",
      required: true,
    },
    type: {
      type: "SecurityFilterType",
      required: true,
    },
  };
}
