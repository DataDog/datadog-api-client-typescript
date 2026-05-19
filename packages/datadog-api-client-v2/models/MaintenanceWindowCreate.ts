/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceWindowCreateAttributes } from "./MaintenanceWindowCreateAttributes";
import { MaintenanceWindowResourceType } from "./MaintenanceWindowResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating a maintenance window.
 */
export class MaintenanceWindowCreate {
  /**
   * Attributes required to create a maintenance window.
   */
  "attributes": MaintenanceWindowCreateAttributes;
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
      type: "MaintenanceWindowCreateAttributes",
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
    return MaintenanceWindowCreate.attributeTypeMap;
  }

  public constructor() {}
}
