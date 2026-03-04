/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchMaintenanceRequestDataAttributes } from "./PatchMaintenanceRequestDataAttributes";
import { PatchMaintenanceRequestDataType } from "./PatchMaintenanceRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class PatchMaintenanceRequestData {
  /**
   * The supported attributes for updating a maintenance.
   */
  "attributes": PatchMaintenanceRequestDataAttributes;
  /**
   * The ID of the maintenance.
   */
  "id": string;
  /**
   * Maintenances resource type.
   */
  "type": PatchMaintenanceRequestDataType;

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
      type: "PatchMaintenanceRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "PatchMaintenanceRequestDataType",
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
    return PatchMaintenanceRequestData.attributeTypeMap;
  }

  public constructor() {}
}
