import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDataDeletionRequestBodyData } from "./CreateDataDeletionRequestBodyData";

/**
 * Object needed to create a data deletion request.
 */
export class CreateDataDeletionRequestBody {
  /**
   * Data needed to create a data deletion request.
   */
  "data": CreateDataDeletionRequestBodyData;
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
      type: "CreateDataDeletionRequestBodyData",
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
    return CreateDataDeletionRequestBody.attributeTypeMap;
  }

  public constructor() {}
}
