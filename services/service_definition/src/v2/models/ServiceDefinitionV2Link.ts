import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2LinkType } from "./ServiceDefinitionV2LinkType";

/**
 * Service's external links.
 */
export class ServiceDefinitionV2Link {
  /**
   * Link name.
   */
  "name": string;
  /**
   * Link type.
   */
  "type": ServiceDefinitionV2LinkType;
  /**
   * Link URL.
   */
  "url": string;
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
    type: {
      baseName: "type",
      type: "ServiceDefinitionV2LinkType",
      required: true,
    },
    url: {
      baseName: "url",
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
    return ServiceDefinitionV2Link.attributeTypeMap;
  }

  public constructor() {}
}
