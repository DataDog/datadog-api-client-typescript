import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchRehydrateRequestAttributes } from "./ArchiveSearchRehydrateRequestAttributes";
import { ArchiveSearchType } from "./ArchiveSearchType";

/**
 * Archive Search object to rehydrate.
 */
export class ArchiveSearchRehydrateRequestData {
  /**
   * Attributes accepted when rehydrating an Archive Search.
   */
  "attributes": ArchiveSearchRehydrateRequestAttributes;
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
      type: "ArchiveSearchRehydrateRequestAttributes",
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
    return ArchiveSearchRehydrateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
