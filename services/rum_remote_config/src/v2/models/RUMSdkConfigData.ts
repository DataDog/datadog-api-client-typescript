import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigAttributes } from "./RUMSdkConfigAttributes";
import { RUMSdkConfigMeta } from "./RUMSdkConfigMeta";
import { RUMSdkConfigType } from "./RUMSdkConfigType";

/**
 * The RUM SDK configuration data object.
 */
export class RUMSdkConfigData {
  /**
   * Attributes of the RUM SDK configuration.
   */
  "attributes": RUMSdkConfigAttributes;
  /**
   * The unique identifier of the RUM SDK configuration.
   */
  "id": string;
  /**
   * Metadata associated with a RUM SDK configuration.
   */
  "meta"?: RUMSdkConfigMeta;
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
      type: "RUMSdkConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMSdkConfigMeta",
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
    return RUMSdkConfigData.attributeTypeMap;
  }

  public constructor() {}
}
