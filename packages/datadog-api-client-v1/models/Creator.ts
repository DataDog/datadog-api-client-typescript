/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the creator of the shared element.
 */
export class Creator {
  /**
   * Email of the creator.
   */
  "email"?: string;
  /**
   * Handle of the creator.
   */
  "handle"?: string;
  /**
   * Name of the creator.
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
    email: {
      type: "string",
    },
    handle: {
      type: "string",
    },
    name: {
      type: "string",
    },
  };
}
