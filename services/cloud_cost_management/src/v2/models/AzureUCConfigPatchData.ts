import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureUCConfigPatchRequestAttributes } from "./AzureUCConfigPatchRequestAttributes";
import { AzureUCConfigPatchRequestType } from "./AzureUCConfigPatchRequestType";

/**
 * Azure config Patch data.
 */
export class AzureUCConfigPatchData {
  /**
   * Attributes for Azure config Patch Request.
   */
  "attributes": AzureUCConfigPatchRequestAttributes;
  /**
   * Type of Azure config Patch Request.
   */
  "type": AzureUCConfigPatchRequestType;
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
      type: "AzureUCConfigPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureUCConfigPatchRequestType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPatchData.attributeTypeMap;
  }

  public constructor() {}
}
