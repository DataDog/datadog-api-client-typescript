import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateMaintenanceTemplateRequestData } from "./CreateMaintenanceTemplateRequestData";

/**
 * Request object for creating a maintenance template.
 */
export class CreateMaintenanceTemplateRequest {
  /**
   * The data object for creating a maintenance template.
   */
  "data"?: CreateMaintenanceTemplateRequestData;
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
      type: "CreateMaintenanceTemplateRequestData",
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
    return CreateMaintenanceTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
