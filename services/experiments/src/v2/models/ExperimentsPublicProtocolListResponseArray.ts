import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsOffsetLinks } from "./ExperimentsOffsetLinks";
import { ExperimentsOffsetMeta } from "./ExperimentsOffsetMeta";
import { ExperimentsPublicProtocolListResponseData } from "./ExperimentsPublicProtocolListResponseData";

/**
 * List of protocol resources with pagination information.
 */
export class ExperimentsPublicProtocolListResponseArray {
  /**
   * Resources returned in this response.
   */
  "data": Array<ExperimentsPublicProtocolListResponseData>;
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
      type: "Array<ExperimentsPublicProtocolListResponseData>",
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
    return ExperimentsPublicProtocolListResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
