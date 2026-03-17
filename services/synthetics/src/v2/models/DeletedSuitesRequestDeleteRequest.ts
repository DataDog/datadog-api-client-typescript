import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedSuitesRequestDelete } from "./DeletedSuitesRequestDelete";

/**
 * Request body for bulk deleting Synthetic test suites.
 */
export class DeletedSuitesRequestDeleteRequest {
  /**
   * Data object for a bulk delete Synthetic test suites request.
   */
  "data": DeletedSuitesRequestDelete;
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
      type: "DeletedSuitesRequestDelete",
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
    return DeletedSuitesRequestDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
