import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchResponseAttributes } from "./ArchiveSearchResponseAttributes";
import { ArchiveSearchType } from "./ArchiveSearchType";

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
