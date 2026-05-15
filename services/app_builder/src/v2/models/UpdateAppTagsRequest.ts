import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppTagsRequestData } from "./UpdateAppTagsRequestData";

/**
 * A request to replace the tags on an app.
 */
export class UpdateAppTagsRequest {
  /**
   * Data for replacing an app's tags.
   */
  "data"?: UpdateAppTagsRequestData;
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
      type: "UpdateAppTagsRequestData",
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
    return UpdateAppTagsRequest.attributeTypeMap;
  }

  public constructor() {}
}
