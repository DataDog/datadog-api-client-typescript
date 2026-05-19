import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomAttributeConfig } from "./CustomAttributeConfig";

/**
 * Response containing a single custom attribute configuration.
 */
export class CustomAttributeConfigResponse {
  /**
   * A custom attribute configuration that defines an organization-specific metadata field on cases. Custom attributes are scoped to a case type and can hold text, URLs, numbers, or predefined select options.
   */
  "data"?: CustomAttributeConfig;
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
      type: "CustomAttributeConfig",
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
    return CustomAttributeConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
