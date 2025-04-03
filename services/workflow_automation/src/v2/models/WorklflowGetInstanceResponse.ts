import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorklflowGetInstanceResponseData } from "./WorklflowGetInstanceResponseData";

/**
 * The state of the given workflow instance.
 */
export class WorklflowGetInstanceResponse {
  /**
   * The data of the instance response.
   */
  "data"?: WorklflowGetInstanceResponseData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any; } };
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
      type: "WorklflowGetInstanceResponseData",
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
    return WorklflowGetInstanceResponse.attributeTypeMap;
  }

  public constructor() {}
}
