import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigType } from "./RUMSdkConfigType";
import { RUMSdkConfigUpdateAttributes } from "./RUMSdkConfigUpdateAttributes";

/**
 * The data object for updating a RUM SDK configuration.
 */
export class RUMSdkConfigUpdateData {
  /**
   * Attributes of the RUM SDK configuration to update.
   */
  "attributes": RUMSdkConfigUpdateAttributes;
  /**
   * The ID of the RUM SDK configuration to update.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `rum_sdk_config`.
   */
  "type": RUMSdkConfigType;
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
      type: "RUMSdkConfigUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMSdkConfigType",
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
    return RUMSdkConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
