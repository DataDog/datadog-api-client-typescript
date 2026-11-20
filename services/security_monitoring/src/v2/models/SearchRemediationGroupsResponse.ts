import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingCaseResponseData } from "./FindingCaseResponseData";
import { RemediationGroupData } from "./RemediationGroupData";
import { RemediationGroupsMeta } from "./RemediationGroupsMeta";

/**
 * A page of remediation groups.
 */
export class SearchRemediationGroupsResponse {
  /**
   * Remediation groups of the page.
   */
  "data": Array<RemediationGroupData>;
  /**
   * Cases of the page's groups, when the request has `include=case`.
   */
  "included"?: Array<FindingCaseResponseData>;
  /**
   * Metadata of the search.
   */
  "meta": RemediationGroupsMeta;
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
      type: "Array<RemediationGroupData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<FindingCaseResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "RemediationGroupsMeta",
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
    return SearchRemediationGroupsResponse.attributeTypeMap;
  }

  public constructor() {}
}
