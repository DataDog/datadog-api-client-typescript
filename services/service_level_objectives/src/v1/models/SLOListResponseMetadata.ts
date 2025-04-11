import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOListResponseMetadataPage } from "./SLOListResponseMetadataPage";

/**
 * The metadata object containing additional information about the list of SLOs.
 */
export class SLOListResponseMetadata {
  /**
   * The object containing information about the pages of the list of SLOs.
   */
  "page"?: SLOListResponseMetadataPage;
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
    page: {
      baseName: "page",
      type: "SLOListResponseMetadataPage",
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
    return SLOListResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
