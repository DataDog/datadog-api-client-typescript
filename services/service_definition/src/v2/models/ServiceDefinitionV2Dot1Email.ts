import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Dot1EmailType } from "./ServiceDefinitionV2Dot1EmailType";

/**
 * Service owner's email.
 */
export class ServiceDefinitionV2Dot1Email {
  /**
   * Contact value.
   */
  "contact": string;
  /**
   * Contact email.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": ServiceDefinitionV2Dot1EmailType;
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
    contact: {
      baseName: "contact",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceDefinitionV2Dot1EmailType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Dot1Email.attributeTypeMap;
  }

  public constructor() {}
}
