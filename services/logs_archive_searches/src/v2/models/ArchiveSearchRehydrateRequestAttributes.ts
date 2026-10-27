import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchRehydrateRequestRehydration } from "./ArchiveSearchRehydrateRequestRehydration";

/**
 * Attributes accepted when rehydrating an Archive Search.
 */
export class ArchiveSearchRehydrateRequestAttributes {
  /**
   * Rehydration settings to apply.
   */
  "rehydration": ArchiveSearchRehydrateRequestRehydration;
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
    rehydration: {
      baseName: "rehydration",
      type: "ArchiveSearchRehydrateRequestRehydration",
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
    return ArchiveSearchRehydrateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
