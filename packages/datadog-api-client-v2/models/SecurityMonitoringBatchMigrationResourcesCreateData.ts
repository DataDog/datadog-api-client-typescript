/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourcesCreateAttributes } from "./SecurityMonitoringBatchMigrationResourcesCreateAttributes";
import { SecurityMonitoringBatchMigrationResourcesType } from "./SecurityMonitoringBatchMigrationResourcesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the resources to add to a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesCreateData {
  /**
   * Attributes of the resources to add to a batch migration.
   */
  "attributes": SecurityMonitoringBatchMigrationResourcesCreateAttributes;
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
      type: "SecurityMonitoringBatchMigrationResourcesCreateAttributes",
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
    return SecurityMonitoringBatchMigrationResourcesCreateData.attributeTypeMap;
  }

  public constructor() {}
}
