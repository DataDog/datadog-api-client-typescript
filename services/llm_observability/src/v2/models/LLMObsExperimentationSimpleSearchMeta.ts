import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationSimpleSearchMetaPage } from "./LLMObsExperimentationSimpleSearchMetaPage";

/**
 * Pagination metadata for a simple search response.
 */
export class LLMObsExperimentationSimpleSearchMeta {
  /**
   * Page metadata.
   */
  "page"?: LLMObsExperimentationSimpleSearchMetaPage;
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
      type: "LLMObsExperimentationSimpleSearchMetaPage",
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
    return LLMObsExperimentationSimpleSearchMeta.attributeTypeMap;
  }

  public constructor() {}
}
