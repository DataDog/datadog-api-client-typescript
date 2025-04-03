import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyUpdateData } from "./ApplicationKeyUpdateData";

/**
 * Request used to update an application key.
 */
export class ApplicationKeyUpdateRequest {
  /**
   * Object used to update an application key.
   */
  "data": ApplicationKeyUpdateData;
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
      type: "ApplicationKeyUpdateData",
      required: true,
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
    return ApplicationKeyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
