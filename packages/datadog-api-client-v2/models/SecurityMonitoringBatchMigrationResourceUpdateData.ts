/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourceType } from "./SecurityMonitoringBatchMigrationResourceType";
import { SecurityMonitoringBatchMigrationResourceUpdateAttributes } from "./SecurityMonitoringBatchMigrationResourceUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the batch migration resource to update.
 */
export class SecurityMonitoringBatchMigrationResourceUpdateData {
  /**
   * Attributes of the batch migration resource to update. At least one attribute is required.
   */
  "attributes": SecurityMonitoringBatchMigrationResourceUpdateAttributes;
  /**
   * The type of resource for a batch migration resource.
   */
  "type": SecurityMonitoringBatchMigrationResourceType;

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
      type: "SecurityMonitoringBatchMigrationResourceUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationResourceType",
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
    return SecurityMonitoringBatchMigrationResourceUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
