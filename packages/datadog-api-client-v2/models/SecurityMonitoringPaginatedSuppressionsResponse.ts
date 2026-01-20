/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSuppression } from "./SecurityMonitoringSuppression";
import { SecurityMonitoringSuppressionsMeta } from "./SecurityMonitoringSuppressionsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object containing the available suppression rules with pagination metadata.
 */
export class SecurityMonitoringPaginatedSuppressionsResponse {
  /**
   * A list of suppressions objects.
   */
  "data"?: Array<SecurityMonitoringSuppression>;
  /**
   * Metadata for the suppression list response.
   */
  "meta"?: SecurityMonitoringSuppressionsMeta;

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
      type: "Array<SecurityMonitoringSuppression>",
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringSuppressionsMeta",
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
    return SecurityMonitoringPaginatedSuppressionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
