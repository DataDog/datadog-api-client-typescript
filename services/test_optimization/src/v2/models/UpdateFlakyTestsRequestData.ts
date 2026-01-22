import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFlakyTestsRequestAttributes } from "./UpdateFlakyTestsRequestAttributes";
import { UpdateFlakyTestsRequestDataType } from "./UpdateFlakyTestsRequestDataType";

/**
 * The JSON:API data for updating flaky test states.
 */
export class UpdateFlakyTestsRequestData {
  /**
   * Attributes for updating flaky test states.
   */
  "attributes": UpdateFlakyTestsRequestAttributes;
  /**
   * The definition of `UpdateFlakyTestsRequestDataType` object.
   */
  "type": UpdateFlakyTestsRequestDataType;
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
      type: "UpdateFlakyTestsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UpdateFlakyTestsRequestDataType",
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
    return UpdateFlakyTestsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
