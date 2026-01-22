import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFlakyTestsResponseAttributes } from "./UpdateFlakyTestsResponseAttributes";
import { UpdateFlakyTestsResponseDataType } from "./UpdateFlakyTestsResponseDataType";

/**
 * Summary of the update operations. Tells whether a test succeeded or failed to be updated.
 */
export class UpdateFlakyTestsResponseData {
  /**
   * Attributes for the update flaky test state response.
   */
  "attributes"?: UpdateFlakyTestsResponseAttributes;
  /**
   * The ID of the response.
   */
  "id"?: string;
  /**
   * The definition of `UpdateFlakyTestsResponseDataType` object.
   */
  "type"?: UpdateFlakyTestsResponseDataType;
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
      type: "UpdateFlakyTestsResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateFlakyTestsResponseDataType",
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
    return UpdateFlakyTestsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
