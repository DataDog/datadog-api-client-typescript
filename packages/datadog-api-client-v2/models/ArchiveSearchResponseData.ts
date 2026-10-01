/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArchiveSearchResponseAttributes } from "./ArchiveSearchResponseAttributes";
import { ArchiveSearchType } from "./ArchiveSearchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Archive Search object.
 */
export class ArchiveSearchResponseData {
  /**
   * Attributes of an Archive Search.
   */
  "attributes": ArchiveSearchResponseAttributes;
  /**
   * Unique identifier of the Archive Search.
   */
  "id": string;
  /**
   * Archive Search resource type.
   */
  "type": ArchiveSearchType;

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
      type: "ArchiveSearchResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ArchiveSearchType",
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
    return ArchiveSearchResponseData.attributeTypeMap;
  }

  public constructor() {}
}
