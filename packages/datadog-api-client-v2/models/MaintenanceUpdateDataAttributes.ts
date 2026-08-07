/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateMaintenanceRequestDataAttributesComponentsAffectedItems } from "./CreateMaintenanceRequestDataAttributesComponentsAffectedItems";
import { MaintenanceUpdateDataAttributesStatus } from "./MaintenanceUpdateDataAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a maintenance update resource.
 */
export class MaintenanceUpdateDataAttributes {
  /**
   * Components affected at the time of the update.
   */
  "componentsAffected"?: Array<CreateMaintenanceRequestDataAttributesComponentsAffectedItems>;
  /**
   * The date and time the update was created.
   */
  "createdAt"?: Date;
  /**
   * The message body of the update.
   */
  "description"?: string;
  /**
   * Whether the update was applied manually by a user (true) or automatically by the system (false).
   */
  "manualTransition"?: boolean;
  /**
   * The date and time the update was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The date and time the update started.
   */
  "startedAt"?: Date;
  /**
   * The status of the maintenance update.
   */
  "status"?: MaintenanceUpdateDataAttributesStatus;

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
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<CreateMaintenanceRequestDataAttributesComponentsAffectedItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    manualTransition: {
      baseName: "manual_transition",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "MaintenanceUpdateDataAttributesStatus",
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
    return MaintenanceUpdateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
