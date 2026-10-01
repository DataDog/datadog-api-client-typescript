import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchCreateRequestAttributes } from "./ArchiveSearchCreateRequestAttributes";
import { ArchiveSearchType } from "./ArchiveSearchType";

/**
 * Archive Search object to create.
 */
export class ArchiveSearchCreateRequestData {
  /**
   * Attributes accepted when creating an Archive Search.
   */
  "attributes": ArchiveSearchCreateRequestAttributes;
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
      type: "ArchiveSearchCreateRequestAttributes",
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
    return ArchiveSearchCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
