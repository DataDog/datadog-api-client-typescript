/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourcesDeleteAttributes } from "./SecurityMonitoringBatchMigrationResourcesDeleteAttributes";
import { SecurityMonitoringBatchMigrationResourcesType } from "./SecurityMonitoringBatchMigrationResourcesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the resources to delete from a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesDeleteData {
  /**
   * Attributes of the resources to delete from a batch migration.
   */
  "attributes": SecurityMonitoringBatchMigrationResourcesDeleteAttributes;
  /**
   * The type of resource for a request on a set of batch migration resources.
   */
  "type": SecurityMonitoringBatchMigrationResourcesType;

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
      type: "SecurityMonitoringBatchMigrationResourcesDeleteAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationResourcesType",
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
    return SecurityMonitoringBatchMigrationResourcesDeleteData.attributeTypeMap;
  }

  public constructor() {}
}
