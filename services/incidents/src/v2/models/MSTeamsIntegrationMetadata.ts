import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MSTeamsIntegrationMetadataTeamsItem } from "./MSTeamsIntegrationMetadataTeamsItem";

/**
 * Incident integration metadata for the Microsoft Teams integration.
 */
export class MSTeamsIntegrationMetadata {
  /**
   * Array of Microsoft Teams in this integration metadata.
   */
  "teams": Array<MSTeamsIntegrationMetadataTeamsItem>;
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
    teams: {
      baseName: "teams",
      type: "Array<MSTeamsIntegrationMetadataTeamsItem>",
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
    return MSTeamsIntegrationMetadata.attributeTypeMap;
  }

  public constructor() {}
}
