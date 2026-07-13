import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListInvestigationsResponseData } from "./ListInvestigationsResponseData";
import { ListInvestigationsResponseLinks } from "./ListInvestigationsResponseLinks";
import { ListInvestigationsResponseMeta } from "./ListInvestigationsResponseMeta";

/**
 * Response for listing investigations.
 */
export class ListInvestigationsResponse {
  /**
   * List of investigations.
   */
  "data": Array<ListInvestigationsResponseData>;
  /**
   * Pagination links for the list investigations response.
   */
  "links": ListInvestigationsResponseLinks;
  /**
   * Metadata for the list investigations response.
   */
  "meta": ListInvestigationsResponseMeta;
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
      type: "Array<ListInvestigationsResponseData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ListInvestigationsResponseLinks",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListInvestigationsResponseMeta",
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
    return ListInvestigationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
