/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Synthetic location that can be used when creating or editing a
 * test.
 */
export class SyntheticsLocation {
  /**
   * Unique identifier of the location.
   */
  "id"?: string;
  /**
   * Name of the location.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
  };
}
