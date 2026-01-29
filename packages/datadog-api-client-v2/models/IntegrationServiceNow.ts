/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationServiceNowAutoCreation } from "./IntegrationServiceNowAutoCreation";
import { IntegrationServiceNowSyncConfig } from "./IntegrationServiceNowSyncConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
