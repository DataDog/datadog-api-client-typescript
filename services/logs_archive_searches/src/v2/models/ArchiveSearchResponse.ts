import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchResponseData } from "./ArchiveSearchResponseData";

/**
 * Response containing a single Archive Search.
 */
export class ArchiveSearchResponse {
  /**
   * Archive Search object.
   */
  "data": ArchiveSearchResponseData;
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
    data: {
      baseName: "data",
      type: "ArchiveSearchResponseData",
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
    return ArchiveSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
