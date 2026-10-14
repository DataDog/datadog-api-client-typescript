import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentObject } from "./DORADeploymentObject";

/**
 * Response for fetching a single deployment event.
 */
export class DORADeploymentFetchResponse {
  /**
   * A DORA deployment event.
   */
  "data"?: DORADeploymentObject;
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
      type: "DORADeploymentObject",
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
    return DORADeploymentFetchResponse.attributeTypeMap;
  }

  public constructor() {}
}
