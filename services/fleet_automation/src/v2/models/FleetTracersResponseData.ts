import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetTracersResponseDataAttributes } from "./FleetTracersResponseDataAttributes";

/**
 * The response data containing status and tracers array.
 */
export class FleetTracersResponseData {
  /**
   * Attributes of the fleet tracers response containing the list of tracers.
   */
  "attributes": FleetTracersResponseDataAttributes;
  /**
   * Status identifier.
   */
  "id": string;
  /**
   * Resource type.
   */
  "type": string;
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
      type: "FleetTracersResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return FleetTracersResponseData.attributeTypeMap;
  }

  public constructor() {}
}
