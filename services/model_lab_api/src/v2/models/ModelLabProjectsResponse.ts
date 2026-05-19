import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabPageMeta } from "./ModelLabPageMeta";
import { ModelLabPaginationLinks } from "./ModelLabPaginationLinks";
import { ModelLabProjectData } from "./ModelLabProjectData";

/**
 * Response containing a list of Model Lab projects with pagination metadata.
 */
export class ModelLabProjectsResponse {
  /**
   * The list of projects.
   */
  "data": Array<ModelLabProjectData>;
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
      type: "Array<ModelLabProjectData>",
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
    return ModelLabProjectsResponse.attributeTypeMap;
  }

  public constructor() {}
}
