/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationPublishErrorDetail } from "./SecurityMonitoringBatchMigrationPublishErrorDetail";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The reason why the resource could not be published.
 */
export class SecurityMonitoringBatchMigrationPublishError {
  /**
   * The error code returned on rule creation.
   */
  "code"?: string;
  /**
   * The rule validation errors returned on rule creation.
   */
  "details"?: Array<SecurityMonitoringBatchMigrationPublishErrorDetail>;
  /**
   * The error message.
   */
  "message": string;

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
    code: {
      baseName: "code",
      type: "string",
    },
    details: {
      baseName: "details",
      type: "Array<SecurityMonitoringBatchMigrationPublishErrorDetail>",
    },
    message: {
      baseName: "message",
      type: "string",
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
    return SecurityMonitoringBatchMigrationPublishError.attributeTypeMap;
  }

  public constructor() {}
}
