import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnyValue } from "./AnyValue";

export class IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties {
  "syncType"?: string;
  /**
   * Represents any valid JSON value.
   */
  "value"?: AnyValue;
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
    syncType: {
      baseName: "sync_type",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "AnyValue",
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
    return IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties.attributeTypeMap;
  }

  public constructor() {}
}
