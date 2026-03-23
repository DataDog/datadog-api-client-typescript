import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedTestResponseDataAttributes } from "./DeletedTestResponseDataAttributes";
import { DeletedTestsResponseType } from "./DeletedTestsResponseType";

/**
 * Data object for a deleted Synthetic test.
 */
export class DeletedTestResponseData {
  /**
   * Attributes of a deleted Synthetic test, including deletion timestamp and public ID.
   */
  "attributes"?: DeletedTestResponseDataAttributes;
  /**
   * The public ID of the deleted Synthetic test.
   */
  "id"?: string;
  /**
   * Type for the bulk delete Synthetic tests response, `delete_tests`.
   */
  "type"?: DeletedTestsResponseType;
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
      type: "DeletedTestResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeletedTestsResponseType",
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
    return DeletedTestResponseData.attributeTypeMap;
  }

  public constructor() {}
}
