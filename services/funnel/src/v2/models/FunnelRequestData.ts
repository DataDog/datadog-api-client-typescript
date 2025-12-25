import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelRequestDataAttributes } from "./FunnelRequestDataAttributes";
import { FunnelRequestDataType } from "./FunnelRequestDataType";

export class FunnelRequestData {
  "attributes"?: FunnelRequestDataAttributes;
  "id"?: string;
  "type": FunnelRequestDataType;
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
      type: "FunnelRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FunnelRequestDataType",
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
    return FunnelRequestData.attributeTypeMap;
  }

  public constructor() {}
}
