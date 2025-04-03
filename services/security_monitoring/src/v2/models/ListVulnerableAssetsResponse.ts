import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Asset } from "./Asset";
import { Links } from "./Links";
import { Metadata } from "./Metadata";

/**
 * The expected response schema when listing vulnerable assets.
 */
export class ListVulnerableAssetsResponse {
  /**
   * List of vulnerable assets.
   */
  "data": Array<Asset>;
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
      type: "Array<Asset>",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListVulnerableAssetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
