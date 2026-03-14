import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestData } from "./CreateStatusPageRequestData";

/**
 * Request object for creating a status page.
 */
export class CreateStatusPageRequest {
  /**
   * The data object for creating a status page.
   */
  "data"?: CreateStatusPageRequestData;
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
      type: "CreateStatusPageRequestData",
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
    return CreateStatusPageRequest.attributeTypeMap;
  }

  public constructor() {}
}
