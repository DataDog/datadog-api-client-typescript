import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplayAnalysisPageMeta } from "./ReplayAnalysisPageMeta";

/**
 * Metadata object for paginated issue list responses.
 */
export class ReplayAnalysisIssueMeta {
  /**
   * Pagination metadata for a RUM replay analysis response.
   */
  "page": ReplayAnalysisPageMeta;
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
    page: {
      baseName: "page",
      type: "ReplayAnalysisPageMeta",
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
    return ReplayAnalysisIssueMeta.attributeTypeMap;
  }

  public constructor() {}
}
