/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationServiceNowSyncConfigPriority } from "./IntegrationServiceNowSyncConfigPriority";
import { SyncProperty } from "./SyncProperty";
import { SyncPropertyWithMapping } from "./SyncPropertyWithMapping";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class IntegrationServiceNowSyncConfig139772721534496 {
  /**
   * Sync property configuration
   */
  "comments"?: SyncProperty;
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
