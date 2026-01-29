import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationJiraSyncProperties } from "./IntegrationJiraSyncProperties";

export class IntegrationJiraSync {
  "enabled"?: boolean;
  "properties"?: IntegrationJiraSyncProperties;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    properties: {
      baseName: "properties",
      type: "IntegrationJiraSyncProperties",
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
    return IntegrationJiraSync.attributeTypeMap;
  }

  public constructor() {}
}
