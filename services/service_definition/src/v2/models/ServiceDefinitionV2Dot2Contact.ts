import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Service owner's contacts information.
 */
export class ServiceDefinitionV2Dot2Contact {
  /**
   * Contact value.
   */
  "contact": string;
  /**
   * Contact Name.
   */
  "name"?: string;
  /**
   * Contact type. Datadog recognizes the following types: `email`, `slack`, and `microsoft-teams`.
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
      type: "string",
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
    return ServiceDefinitionV2Dot2Contact.attributeTypeMap;
  }

  public constructor() {}
}
