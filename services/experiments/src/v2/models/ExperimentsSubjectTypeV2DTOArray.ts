import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsOffsetLinks } from "./ExperimentsOffsetLinks";
import { ExperimentsOffsetMeta } from "./ExperimentsOffsetMeta";
import { ExperimentsSubjectTypeV2DTOData } from "./ExperimentsSubjectTypeV2DTOData";

/**
 * List of subject type resources with pagination information.
 */
export class ExperimentsSubjectTypeV2DTOArray {
  /**
   * Resources returned in this response.
   */
  "data": Array<ExperimentsSubjectTypeV2DTOData>;
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
      type: "Array<ExperimentsSubjectTypeV2DTOData>",
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
    return ExperimentsSubjectTypeV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
