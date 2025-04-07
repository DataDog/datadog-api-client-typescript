import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProcessSummariesMetaPage } from "./ProcessSummariesMetaPage";

/**
 * Response metadata object.
 */
export class ProcessSummariesMeta {
  /**
   * Paging attributes.
   */
  "page"?: ProcessSummariesMetaPage;
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
      type: "ProcessSummariesMetaPage",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessSummariesMeta.attributeTypeMap;
  }

  public constructor() {}
}
