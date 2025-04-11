import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppResponseData } from "./DeleteAppResponseData";

/**
 * The response object after an app is successfully deleted.
 */
export class DeleteAppResponse {
  /**
   * The definition of `DeleteAppResponseData` object.
   */
  "data"?: DeleteAppResponseData;
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
      type: "DeleteAppResponseData",
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
    return DeleteAppResponse.attributeTypeMap;
  }

  public constructor() {}
}
