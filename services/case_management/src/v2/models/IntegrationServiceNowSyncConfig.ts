import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationServiceNowSyncConfig139772721534496 } from "./IntegrationServiceNowSyncConfig139772721534496";

export class IntegrationServiceNowSyncConfig {
  "enabled"?: boolean;
  "properties"?: IntegrationServiceNowSyncConfig139772721534496;
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
      type: "IntegrationServiceNowSyncConfig139772721534496",
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
    return IntegrationServiceNowSyncConfig.attributeTypeMap;
  }

  public constructor() {}
}
