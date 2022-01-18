/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Datadog application key.
 */

export class FullApplicationKey {
  "attributes"?: FullApplicationKeyAttributes;
  /**
   * ID of the application key.
   */
  "id"?: string;
  "relationships"?: ApplicationKeyRelationships;
  "type"?: ApplicationKeysType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "FullApplicationKeyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ApplicationKeyRelationships",
    },
    type: {
      baseName: "type",
      type: "ApplicationKeysType",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return FullApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
