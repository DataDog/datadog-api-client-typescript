/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationPublishData } from "./SecurityMonitoringBatchMigrationPublishData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to publish the resources of a batch migration.
 */
export class SecurityMonitoringBatchMigrationPublishRequest {
  /**
   * Data of the batch migration publish request.
   */
  "data": SecurityMonitoringBatchMigrationPublishData;

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
    data: {
      baseName: "data",
      type: "SecurityMonitoringBatchMigrationPublishData",
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
    return SecurityMonitoringBatchMigrationPublishRequest.attributeTypeMap;
  }

  public constructor() {}
}
