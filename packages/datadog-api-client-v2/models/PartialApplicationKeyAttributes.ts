/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a partial application key.
 */
export class PartialApplicationKeyAttributes {
  /**
   * Creation date of the application key.
   */
  "createdAt"?: string;
  /**
   * The last four characters of the application key.
   */
  "last4"?: string;
  /**
   * Name of the application key.
   */
  "name"?: string;
  /**
   * Array of scopes to grant the application key. This feature is in private beta, please contact Datadog support to enable scopes for your application keys.
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
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    last4: {
      baseName: "last4",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PartialApplicationKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
