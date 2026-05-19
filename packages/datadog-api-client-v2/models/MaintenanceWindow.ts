/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceWindowAttributes } from "./MaintenanceWindowAttributes";
import { MaintenanceWindowResourceType } from "./MaintenanceWindowResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A maintenance window that defines a scheduled time period during which case-related notifications and automation rules are suppressed. Each maintenance window applies to cases matching a specified query.
 */
export class MaintenanceWindow {
  /**
   * Attributes of a maintenance window, including its schedule and the query that determines which cases are affected.
   */
  "attributes": MaintenanceWindowAttributes;
  /**
   * The maintenance window's identifier.
   */
  "id": string;
  /**
   * JSON:API resource type for maintenance windows.
   */
  "type": MaintenanceWindowResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "MaintenanceWindowAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MaintenanceWindowResourceType",
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
    return MaintenanceWindow.attributeTypeMap;
  }

  public constructor() {}
}
