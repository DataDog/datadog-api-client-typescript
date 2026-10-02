import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsOffsetMetaPage } from "./ExperimentsOffsetMetaPage";

/**
 * Pagination information for a list response.
 */
export class ExperimentsOffsetMeta {
  /**
   * Result counts and offsets for a page of results.
   */
  "page"?: ExperimentsOffsetMetaPage;
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
      type: "ExperimentsOffsetMetaPage",
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
    return ExperimentsOffsetMeta.attributeTypeMap;
  }

  public constructor() {}
}
