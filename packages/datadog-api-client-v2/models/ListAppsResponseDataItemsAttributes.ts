/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ListAppsResponseDataItemsAttributes` object.
 */
export class ListAppsResponseDataItemsAttributes {
  /**
   * The `attributes` `description`.
   */
  "description"?: string;
  /**
   * The `attributes` `favorite`.
   */
  "favorite"?: boolean;
  /**
   * The `attributes` `name`.
   */
  "name"?: string;
  /**
   * The `attributes` `selfService`.
   */
  "selfService"?: boolean;
  /**
   * The `attributes` `tags`.
   */
  "tags"?: Array<string>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    favorite: {
      baseName: "favorite",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    selfService: {
      baseName: "selfService",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListAppsResponseDataItemsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
