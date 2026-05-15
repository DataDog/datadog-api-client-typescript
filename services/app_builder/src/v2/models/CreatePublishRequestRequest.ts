import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatePublishRequestRequestData } from "./CreatePublishRequestRequestData";

/**
 * A request to ask for approval to publish an app whose protection level is `approval_required`.
 */
export class CreatePublishRequestRequest {
  /**
   * Data for creating a publish request.
   */
  "data"?: CreatePublishRequestRequestData;
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
      type: "CreatePublishRequestRequestData",
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
    return CreatePublishRequestRequest.attributeTypeMap;
  }

  public constructor() {}
}
