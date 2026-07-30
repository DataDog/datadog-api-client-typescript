import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationsListResponseMetaPage } from "./RUMOperationsListResponseMetaPage";

/**
 * Metadata for a list of RUM operations.
 */
export class RUMOperationsListResponseMeta {
  /**
   * Pagination metadata for a list of RUM operations.
   */
  "page"?: RUMOperationsListResponseMetaPage;
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
      type: "RUMOperationsListResponseMetaPage",
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
    return RUMOperationsListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
