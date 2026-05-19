/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceWindowResourceType } from "./MaintenanceWindowResourceType";
import { MaintenanceWindowUpdateAttributes } from "./MaintenanceWindowUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a maintenance window.
 */
export class MaintenanceWindowUpdate {
  /**
   * Attributes that can be updated on a maintenance window. All fields are optional; only provided fields are changed.
   */
  "attributes"?: MaintenanceWindowUpdateAttributes;
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
      type: "MaintenanceWindowUpdateAttributes",
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
    return MaintenanceWindowUpdate.attributeTypeMap;
  }

  public constructor() {}
}
