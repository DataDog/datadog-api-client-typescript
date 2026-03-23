import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedTestsRequestDeleteAttributes } from "./DeletedTestsRequestDeleteAttributes";
import { DeletedTestsRequestType } from "./DeletedTestsRequestType";

/**
 * Data object for a bulk delete Synthetic tests request.
 */
export class DeletedTestsRequestDelete {
  /**
   * Attributes for a bulk delete Synthetic tests request.
   */
  "attributes": DeletedTestsRequestDeleteAttributes;
  /**
   * An optional identifier for the delete request.
   */
  "id"?: string;
  /**
   * Type for the bulk delete Synthetic tests request, `delete_tests_request`.
   */
  "type"?: DeletedTestsRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "DeletedTestsRequestDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeletedTestsRequestType",
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
    return DeletedTestsRequestDelete.attributeTypeMap;
  }

  public constructor() {}
}
