import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationCreateAttributes } from "./RUMApplicationCreateAttributes";
import { RUMApplicationCreateType } from "./RUMApplicationCreateType";

/**
 * RUM application creation.
 */
export class RUMApplicationCreate {
  /**
   * RUM application creation attributes.
   * When `rum_event_processing_state` is omitted, it defaults to `ALL`. When `product_analytics_retention_state` is omitted, Product Analytics is not enabled. Setting it to `MAX` requires the `product_analytics_apps_write` permission.
   */
  "attributes": RUMApplicationCreateAttributes;
  /**
   * RUM application creation type.
   */
  "type": RUMApplicationCreateType;
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
      type: "RUMApplicationCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationCreateType",
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
    return RUMApplicationCreate.attributeTypeMap;
  }

  public constructor() {}
}
