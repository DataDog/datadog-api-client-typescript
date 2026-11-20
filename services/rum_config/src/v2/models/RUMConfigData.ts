import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMConfigAttributes } from "./RUMConfigAttributes";
import { RUMConfigType } from "./RUMConfigType";

/**
 * The RUM configuration data.
 */
export class RUMConfigData {
  /**
   * Attributes of the RUM configuration.
   */
  "attributes": RUMConfigAttributes;
  /**
   * The organization ID associated with the RUM configuration.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `rum_config`.
   */
  "type": RUMConfigType;
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
      type: "RUMConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMConfigType",
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
    return RUMConfigData.attributeTypeMap;
  }

  public constructor() {}
}
