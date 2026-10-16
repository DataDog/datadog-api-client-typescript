/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationType } from "./SecurityMonitoringBatchMigrationType";
import { SecurityMonitoringBatchMigrationUpdateAttributes } from "./SecurityMonitoringBatchMigrationUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the batch migration to update.
 */
export class SecurityMonitoringBatchMigrationUpdateData {
  /**
   * Attributes of the batch migration to update. At least one attribute is required.
   */
  "attributes": SecurityMonitoringBatchMigrationUpdateAttributes;
  /**
   * The type of resource for a batch migration.
   */
  "type": SecurityMonitoringBatchMigrationType;

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
      type: "SecurityMonitoringBatchMigrationUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationType",
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
    return SecurityMonitoringBatchMigrationUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
