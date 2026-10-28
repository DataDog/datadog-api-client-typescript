/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataObservabilityMonitorGroupStatus } from "./DataObservabilityMonitorGroupStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A monitor group that is not ok after a run.
 */
export class DataObservabilityMonitorRunGroup {
  /**
   * The account of the entity, when the platform has one.
   */
  "account"?: string;
  /**
   * The column of the entity, when it is a column.
   */
  "column"?: string;
  /**
   * The database of the entity.
   */
  "database": string;
  /**
   * The ID of the table or column the group checks.
   */
  "entityId": string;
  /**
   * The type of the entity, such as table or column.
   */
  "entityType": string;
  /**
   * The group's name in Datadog monitors, as the monitor API and UI show it. Pass it as `filter[group]` to list the group's evaluations.
   */
  "group": string;
  /**
   * The values of the monitor's group-by columns for this group. `N/A` means the column had no value.
   */
  "groupByValues"?: { [key: string]: string };
  /**
   * The data platform of the entity.
   */
  "platform": string;
  /**
   * The schema of the entity, when it has one.
   */
  "schema"?: string;
  /**
   * The state of a monitor group, from the alerting engine.
   */
  "status": DataObservabilityMonitorGroupStatus;
  /**
   * The table of the entity, when it is a table or column.
   */
  "table"?: string;

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
    account: {
      baseName: "account",
      type: "string",
    },
    column: {
      baseName: "column",
      type: "string",
    },
    database: {
      baseName: "database",
      type: "string",
      required: true,
    },
    entityId: {
      baseName: "entity_id",
      type: "string",
      required: true,
    },
    entityType: {
      baseName: "entity_type",
      type: "string",
      required: true,
    },
    group: {
      baseName: "group",
      type: "string",
      required: true,
    },
    groupByValues: {
      baseName: "group_by_values",
      type: "{ [key: string]: string; }",
    },
    platform: {
      baseName: "platform",
      type: "string",
      required: true,
    },
    schema: {
      baseName: "schema",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "DataObservabilityMonitorGroupStatus",
      required: true,
    },
    table: {
      baseName: "table",
      type: "string",
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
    return DataObservabilityMonitorRunGroup.attributeTypeMap;
  }

  public constructor() {}
}
