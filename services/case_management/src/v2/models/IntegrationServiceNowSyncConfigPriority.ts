import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class IntegrationServiceNowSyncConfigPriority {
  "impactMapping"?: { [key: string]: string };
  "syncType"?: string;
  "urgencyMapping"?: { [key: string]: string };
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
    impactMapping: {
      baseName: "impact_mapping",
      type: "{ [key: string]: string; }",
    },
    syncType: {
      baseName: "sync_type",
      type: "string",
    },
    urgencyMapping: {
      baseName: "urgency_mapping",
      type: "{ [key: string]: string; }",
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
    return IntegrationServiceNowSyncConfigPriority.attributeTypeMap;
  }

  public constructor() {}
}
