import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppSelfServiceRequestData } from "./UpdateAppSelfServiceRequestData";

/**
 * A request to enable or disable self-service for an app.
 */
export class UpdateAppSelfServiceRequest {
  /**
   * Data for updating an app's self-service status.
   */
  "data"?: UpdateAppSelfServiceRequestData;
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
      type: "UpdateAppSelfServiceRequestData",
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
    return UpdateAppSelfServiceRequest.attributeTypeMap;
  }

  public constructor() {}
}
