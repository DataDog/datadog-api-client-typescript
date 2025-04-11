import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureUCConfigPostRequestAttributes } from "./AzureUCConfigPostRequestAttributes";
import { AzureUCConfigPostRequestType } from "./AzureUCConfigPostRequestType";

/**
 * Azure config Post data.
 */
export class AzureUCConfigPostData {
  /**
   * Attributes for Azure config Post Request.
   */
  "attributes": AzureUCConfigPostRequestAttributes;
  /**
   * Type of Azure config Post Request.
   */
  "type": AzureUCConfigPostRequestType;
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
      type: "AzureUCConfigPostRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureUCConfigPostRequestType",
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
    return AzureUCConfigPostData.attributeTypeMap;
  }

  public constructor() {}
}
