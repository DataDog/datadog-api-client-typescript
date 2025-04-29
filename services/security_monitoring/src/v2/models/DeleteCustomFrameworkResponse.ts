import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomFrameworkMetadata } from "./CustomFrameworkMetadata";

/**
 * Response object to delete a custom framework.
 */
export class DeleteCustomFrameworkResponse {
  /**
   * Metadata for custom frameworks.
   */
  "data": CustomFrameworkMetadata;
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
      type: "CustomFrameworkMetadata",
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
    return DeleteCustomFrameworkResponse.attributeTypeMap;
  }

  public constructor() {}
}
