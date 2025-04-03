import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppRequestData } from "./CreateAppRequestData";

/**
 * A request object for creating a new app.
 */
export class CreateAppRequest {
  /**
   * The data object containing the app definition.
   */
  "data"?: CreateAppRequestData;
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
      type: "CreateAppRequestData",
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
    return CreateAppRequest.attributeTypeMap;
  }

  public constructor() {}
}
