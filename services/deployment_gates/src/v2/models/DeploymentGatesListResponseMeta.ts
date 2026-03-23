import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesListResponseMetaPage } from "./DeploymentGatesListResponseMetaPage";

/**
 * Metadata for a list of deployment gates response.
 */
export class DeploymentGatesListResponseMeta {
  /**
   * Pagination information for a list of deployment gates.
   */
  "page"?: DeploymentGatesListResponseMetaPage;
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
      type: "DeploymentGatesListResponseMetaPage",
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
    return DeploymentGatesListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
