/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog API key.
 */
export class ApiKey {
  /**
   * Date of creation of the API key.
   */
  "created"?: string;
  /**
   * Datadog user handle that created the API key.
   */
  "createdBy"?: string;
  /**
   * API key.
   */
  "key"?: string;
  /**
   * Name of your API key.
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
    created: {
      baseName: "created",
      type: "string",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiKey.attributeTypeMap;
  }

  public constructor() {}
}
