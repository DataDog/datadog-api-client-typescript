import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyServiceAttributes } from "./FastlyServiceAttributes";
import { FastlyServiceType } from "./FastlyServiceType";

/**
 * Data object for Fastly service requests.
 */
export class FastlyServiceData {
  /**
   * Attributes object for Fastly service requests.
   */
  "attributes"?: FastlyServiceAttributes;
  /**
   * The ID of the Fastly service.
   */
  "id": string;
  /**
   * The JSON:API type for this API. Should always be `fastly-services`.
   */
  "type": FastlyServiceType;
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
      type: "FastlyServiceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FastlyServiceType",
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
    return FastlyServiceData.attributeTypeMap;
  }

  public constructor() {}
}
