import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An entity the investigation found.
 */
export class SecurityAgentInvestigationEntity {
  /**
   * More specific type of the entity.
   */
  "subType"?: string;
  /**
   * Type of the entity, such as a user, a host, or an IP address.
   */
  "type": string;
  /**
   * Value that identifies the entity.
   */
  "value": string;
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
    subType: {
      baseName: "sub_type",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return SecurityAgentInvestigationEntity.attributeTypeMap;
  }

  public constructor() {}
}
