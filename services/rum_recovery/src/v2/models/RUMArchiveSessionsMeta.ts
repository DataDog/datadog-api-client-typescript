import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveSessionsPage } from "./RUMArchiveSessionsPage";

/**
 * Search metadata.
 */
export class RUMArchiveSessionsMeta {
  /**
   * Search pagination.
   */
  "page": RUMArchiveSessionsPage;
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
      type: "RUMArchiveSessionsPage",
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
    return RUMArchiveSessionsMeta.attributeTypeMap;
  }

  public constructor() {}
}
