/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationPublishAttributes } from "./SecurityMonitoringBatchMigrationPublishAttributes";
import { SecurityMonitoringBatchMigrationPublishType } from "./SecurityMonitoringBatchMigrationPublishType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the batch migration publish request.
 */
export class SecurityMonitoringBatchMigrationPublishData {
  /**
   * Attributes of the batch migration publish request.
   */
  "attributes": SecurityMonitoringBatchMigrationPublishAttributes;
  /**
   * The type of resource for a batch migration publish request.
   */
  "type": SecurityMonitoringBatchMigrationPublishType;

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
      type: "SecurityMonitoringBatchMigrationPublishAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringBatchMigrationPublishType",
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
    return SecurityMonitoringBatchMigrationPublishData.attributeTypeMap;
  }

  public constructor() {}
}
