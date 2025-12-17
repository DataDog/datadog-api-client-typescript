import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFindingsData } from "./SecurityFindingsData";
import { SecurityFindingsLinks } from "./SecurityFindingsLinks";
import { SecurityFindingsMeta } from "./SecurityFindingsMeta";

/**
 * The expected response schema when listing security findings.
 */
export class ListSecurityFindingsResponse {
  /**
   * Array of security findings matching the search query.
   */
  "data"?: Array<SecurityFindingsData>;
  /**
   * Links for pagination.
   */
  "links"?: SecurityFindingsLinks;
  /**
   * Metadata about the response.
   */
  "meta"?: SecurityFindingsMeta;
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
      type: "Array<SecurityFindingsData>",
    },
    links: {
      baseName: "links",
      type: "SecurityFindingsLinks",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFindingsMeta",
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
    return ListSecurityFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
