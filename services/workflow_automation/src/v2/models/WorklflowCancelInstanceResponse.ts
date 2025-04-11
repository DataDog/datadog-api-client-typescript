import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorklflowCancelInstanceResponseData } from "./WorklflowCancelInstanceResponseData";

/**
 * Information about the canceled instance.
 */
export class WorklflowCancelInstanceResponse {
  /**
   * Data about the canceled instance.
   */
  "data"?: WorklflowCancelInstanceResponseData;
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
      type: "WorklflowCancelInstanceResponseData",
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
    return WorklflowCancelInstanceResponse.attributeTypeMap;
  }

  public constructor() {}
}
