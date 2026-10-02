import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExposureSQLModelV2DTOData } from "./ExperimentsExposureSQLModelV2DTOData";
import { ExperimentsOffsetLinks } from "./ExperimentsOffsetLinks";
import { ExperimentsOffsetMeta } from "./ExperimentsOffsetMeta";

/**
 * Response containing a page of exposure SQL models.
 */
export class ExperimentsExposureSQLModelV2DTOArray {
  /**
   * Exposure SQL models in the current page.
   */
  "data": Array<ExperimentsExposureSQLModelV2DTOData>;
  /**
   * Links for navigating a paginated result set.
   */
  "links"?: ExperimentsOffsetLinks;
  /**
   * Pagination information for a list response.
   */
  "meta"?: ExperimentsOffsetMeta;
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
      type: "Array<ExperimentsExposureSQLModelV2DTOData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ExperimentsOffsetLinks",
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsOffsetMeta",
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
    return ExperimentsExposureSQLModelV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
