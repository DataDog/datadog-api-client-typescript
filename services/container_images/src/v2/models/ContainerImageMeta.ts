import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageMetaPage } from "./ContainerImageMetaPage";

/**
 * Response metadata object.
 */
export class ContainerImageMeta {
  /**
   * Paging attributes.
   */
  "pagination"?: ContainerImageMetaPage;
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
    pagination: {
      baseName: "pagination",
      type: "ContainerImageMetaPage",
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
    return ContainerImageMeta.attributeTypeMap;
  }

  public constructor() {}
}
