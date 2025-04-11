import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyService } from "./FastlyService";

/**
 * Attributes object of a Fastly account.
 */
export class FastlyAccounResponseAttributes {
  /**
   * The name of the Fastly account.
   */
  "name": string;
  /**
   * A list of services belonging to the parent account.
   */
  "services"?: Array<FastlyService>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    services: {
      baseName: "services",
      type: "Array<FastlyService>",
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
    return FastlyAccounResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
