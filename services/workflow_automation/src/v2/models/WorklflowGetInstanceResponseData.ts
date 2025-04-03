import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorklflowGetInstanceResponseDataAttributes } from "./WorklflowGetInstanceResponseDataAttributes";

/**
 * The data of the instance response.
 */
export class WorklflowGetInstanceResponseData {
  /**
   * The attributes of the instance response data.
   */
  "attributes"?: WorklflowGetInstanceResponseDataAttributes;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "WorklflowGetInstanceResponseDataAttributes",
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
    return WorklflowGetInstanceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
