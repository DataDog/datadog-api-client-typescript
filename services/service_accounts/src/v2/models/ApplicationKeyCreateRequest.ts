import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyCreateData } from "./ApplicationKeyCreateData";

/**
 * Request used to create an application key.
 */
export class ApplicationKeyCreateRequest {
  /**
   * Object used to create an application key.
   */
  "data": ApplicationKeyCreateData;
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
      type: "ApplicationKeyCreateData",
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
    return ApplicationKeyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
