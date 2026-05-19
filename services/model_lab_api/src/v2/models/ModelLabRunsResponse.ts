import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabPageMeta } from "./ModelLabPageMeta";
import { ModelLabPaginationLinks } from "./ModelLabPaginationLinks";
import { ModelLabRunData } from "./ModelLabRunData";

/**
 * Response containing a list of Model Lab runs with pagination metadata.
 */
export class ModelLabRunsResponse {
  /**
   * The list of runs.
   */
  "data": Array<ModelLabRunData>;
  /**
   * Pagination links for navigating list responses.
   */
  "links"?: ModelLabPaginationLinks;
  /**
   * Pagination metadata for a list response.
   */
  "meta": ModelLabPageMeta;
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
      type: "Array<ModelLabRunData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ModelLabPaginationLinks",
    },
    meta: {
      baseName: "meta",
      type: "ModelLabPageMeta",
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
    return ModelLabRunsResponse.attributeTypeMap;
  }

  public constructor() {}
}
