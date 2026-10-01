import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchCreateRequestData } from "./ArchiveSearchCreateRequestData";

/**
 * Request to create an Archive Search.
 */
export class ArchiveSearchCreateRequest {
  /**
   * Archive Search object to create.
   */
  "data": ArchiveSearchCreateRequestData;
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
      type: "ArchiveSearchCreateRequestData",
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
    return ArchiveSearchCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
