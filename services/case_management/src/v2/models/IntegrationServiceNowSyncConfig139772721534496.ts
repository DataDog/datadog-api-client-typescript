import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationServiceNowSyncConfigPriority } from "./IntegrationServiceNowSyncConfigPriority";
import { SyncProperty } from "./SyncProperty";
import { SyncPropertyWithMapping } from "./SyncPropertyWithMapping";

/**
 * Field-level synchronization properties for ServiceNow integration
 */
export class IntegrationServiceNowSyncConfig139772721534496 {
  /**
   * Sync property configuration
   */
  "comments"?: SyncProperty;
  /**
   * Priority synchronization configuration for ServiceNow integration
   */
  "priority"?: IntegrationServiceNowSyncConfigPriority;
  /**
   * Sync property with mapping configuration
   */
  "status"?: SyncPropertyWithMapping;
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
    comments: {
      baseName: "comments",
      type: "SyncProperty",
    },
    priority: {
      baseName: "priority",
      type: "IntegrationServiceNowSyncConfigPriority",
    },
    status: {
      baseName: "status",
      type: "SyncPropertyWithMapping",
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
    return IntegrationServiceNowSyncConfig139772721534496.attributeTypeMap;
  }

  public constructor() {}
}
