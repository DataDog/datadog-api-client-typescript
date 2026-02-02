import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelResponseDataAttributes } from "./FunnelResponseDataAttributes";
import { FunnelResponseDataType } from "./FunnelResponseDataType";

export class FunnelResponseData {
  "attributes"?: FunnelResponseDataAttributes;
  "id"?: string;
  "type": FunnelResponseDataType;
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
      type: "FunnelResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FunnelResponseDataType",
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
    return FunnelResponseData.attributeTypeMap;
  }

  public constructor() {}
}
