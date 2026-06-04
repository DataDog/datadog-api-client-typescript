/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JSSourcemapAttributes } from "./JSSourcemapAttributes";
import { SourcemapDataType } from "./SourcemapDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JavaScript source map data object.
 */
export class JSSourcemapData {
  /**
   * Attributes of a JavaScript source map.
   */
  "attributes": JSSourcemapAttributes;
  /**
   * The unique identifier of the source map.
   */
  "id": string;
  /**
   * The resource type for source map objects.
   */
  "type": SourcemapDataType;

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
    attributes: {
      baseName: "attributes",
      type: "JSSourcemapAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SourcemapDataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JSSourcemapData.attributeTypeMap;
  }

  public constructor() {}
}
