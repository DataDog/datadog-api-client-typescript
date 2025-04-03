import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2MSTeamsType } from "./ServiceDefinitionV2MSTeamsType";

/**
 * Service owner's Microsoft Teams.
 */
export class ServiceDefinitionV2MSTeams {
  /**
   * Contact value.
   */
  "contact": string;
  /**
   * Contact Microsoft Teams.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": ServiceDefinitionV2MSTeamsType;
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
      type: "ServiceDefinitionV2MSTeamsType",
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
    return ServiceDefinitionV2MSTeams.attributeTypeMap;
  }

  public constructor() {}
}
