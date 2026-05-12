/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateMaintenanceRequestDataAttributesComponentsAffectedItems } from "./CreateMaintenanceRequestDataAttributesComponentsAffectedItems";
import { CreateMaintenanceRequestDataAttributesUpdatesItemsStatus } from "./CreateMaintenanceRequestDataAttributesUpdatesItemsStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A backfilled maintenance update entry.
 */
export class CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems {
  /**
   * The components affected.
   */
  "componentsAffected": Array<CreateMaintenanceRequestDataAttributesComponentsAffectedItems>;
  /**
   * A description of the update.
   */
  "description": string;
  /**
   * Timestamp of when the update occurred.
   */
  "startedAt": Date;
  /**
   * The status of a maintenance update.
   */
  "status": CreateMaintenanceRequestDataAttributesUpdatesItemsStatus;

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
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CreateMaintenanceRequestDataAttributesUpdatesItemsStatus",
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
    return CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems.attributeTypeMap;
  }

  public constructor() {}
}
