import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationServiceNowAutoCreation } from "./IntegrationServiceNowAutoCreation";
import { IntegrationServiceNowSyncConfig } from "./IntegrationServiceNowSyncConfig";

/**
 * ServiceNow integration settings
 */
export class IntegrationServiceNow {
  /**
   * Assignment group
   */
  "assignmentGroup"?: string;
  "autoCreation"?: IntegrationServiceNowAutoCreation;
  /**
   * Whether ServiceNow integration is enabled
   */
  "enabled"?: boolean;
  /**
   * ServiceNow instance name
   */
  "instanceName"?: string;
  "syncConfig"?: IntegrationServiceNowSyncConfig;
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
    assignmentGroup: {
      baseName: "assignment_group",
      type: "string",
    },
    autoCreation: {
      baseName: "auto_creation",
      type: "IntegrationServiceNowAutoCreation",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    instanceName: {
      baseName: "instance_name",
      type: "string",
    },
    syncConfig: {
      baseName: "sync_config",
      type: "IntegrationServiceNowSyncConfig",
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
    return IntegrationServiceNow.attributeTypeMap;
  }

  public constructor() {}
}
