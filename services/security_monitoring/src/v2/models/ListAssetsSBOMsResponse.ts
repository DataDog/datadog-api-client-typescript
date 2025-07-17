import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Links } from "./Links";
import { Metadata } from "./Metadata";
import { SBOM } from "./SBOM";

/**
 * The expected response schema when listing assets SBOMs.
 */
export class ListAssetsSBOMsResponse {
  /**
   * List of assets SBOMs.
   */
  "data": Array<SBOM>;
  /**
   * The JSON:API links related to pagination.
   */
  "links"?: Links;
  /**
   * The metadata related to this request.
   */
  "meta"?: Metadata;
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
      type: "Array<SBOM>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "Links",
    },
    meta: {
      baseName: "meta",
      type: "Metadata",
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
    return ListAssetsSBOMsResponse.attributeTypeMap;
  }

  public constructor() {}
}
