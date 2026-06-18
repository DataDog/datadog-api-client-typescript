import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigAttributes } from "./RumSdkConfigAttributes";
import { RumSdkConfigMeta } from "./RumSdkConfigMeta";
import { RumSdkConfigType } from "./RumSdkConfigType";

/**
 * The RUM SDK configuration data object.
 */
export class RumSdkConfigData {
  /**
   * Attributes of the RUM SDK configuration.
   */
  "attributes": RumSdkConfigAttributes;
  /**
   * The unique identifier of the RUM SDK configuration.
   */
  "id": string;
  /**
   * Metadata associated with a RUM SDK configuration.
   */
  "meta"?: RumSdkConfigMeta;
  /**
   * The type of the resource. The value should always be `rum_sdk_config`.
   */
  "type": RumSdkConfigType;
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
      type: "RumSdkConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumSdkConfigMeta",
    },
    type: {
      baseName: "type",
      type: "RumSdkConfigType",
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
    return RumSdkConfigData.attributeTypeMap;
  }

  public constructor() {}
}
