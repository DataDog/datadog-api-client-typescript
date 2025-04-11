import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Deployment } from "./Deployment";

/**
 * The response object after an app is successfully published.
 */
export class PublishAppResponse {
  /**
   * The version of the app that was published.
   */
  "data"?: Deployment;
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
      type: "Deployment",
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
    return PublishAppResponse.attributeTypeMap;
  }

  public constructor() {}
}
