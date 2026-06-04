/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SourcemapFileAttributes } from "./SourcemapFileAttributes";
import { SourcemapFileDataType } from "./SourcemapFileDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JavaScript source map file data object.
 */
export class SourcemapFileData {
  /**
   * Attributes of a JavaScript source map file.
   */
  "attributes": SourcemapFileAttributes;
  /**
   * The unique identifier of the source map file, typically the path to the file.
   */
  "id": string;
  /**
   * The resource type for source map file objects.
   */
  "type": SourcemapFileDataType;

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
      type: "SourcemapFileAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SourcemapFileDataType",
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
    return SourcemapFileData.attributeTypeMap;
  }

  public constructor() {}
}
