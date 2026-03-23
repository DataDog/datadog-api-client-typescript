import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedTestsRequestDelete } from "./DeletedTestsRequestDelete";

/**
 * Request body for bulk deleting Synthetic tests.
 */
export class DeletedTestsRequestDeleteRequest {
  /**
   * Data object for a bulk delete Synthetic tests request.
   */
  "data": DeletedTestsRequestDelete;
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
      type: "DeletedTestsRequestDelete",
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
    return DeletedTestsRequestDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
