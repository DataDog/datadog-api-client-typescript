/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create an application Key.
 */
export class ApplicationKeyCreateAttributes {
  /**
   * Name of the application key.
   */
  "name": string;
  /**
   * Array of scopes to grant the application key.
   */
  "scopes"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      type: "string",
      required: true,
    },
    scopes: {
      type: "Array<string>",
    },
  };
}
