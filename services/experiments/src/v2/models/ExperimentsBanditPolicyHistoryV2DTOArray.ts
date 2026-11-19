import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditPolicyHistoryV2DTOData } from "./ExperimentsBanditPolicyHistoryV2DTOData";
import { ExperimentsOffsetLinks } from "./ExperimentsOffsetLinks";
import { ExperimentsOffsetMeta } from "./ExperimentsOffsetMeta";

/**
 * Response containing a page of a bandit's policy history.
 */
export class ExperimentsBanditPolicyHistoryV2DTOArray {
  /**
   * Policies on this page.
   */
  "data": Array<ExperimentsBanditPolicyHistoryV2DTOData>;
  /**
   * Links for navigating a paginated result set.
   */
  "links": ExperimentsOffsetLinks;
  /**
   * Pagination information for a list response.
   */
  "meta": ExperimentsOffsetMeta;
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
      type: "Array<ExperimentsBanditPolicyHistoryV2DTOData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ExperimentsOffsetLinks",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsOffsetMeta",
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
    return ExperimentsBanditPolicyHistoryV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
