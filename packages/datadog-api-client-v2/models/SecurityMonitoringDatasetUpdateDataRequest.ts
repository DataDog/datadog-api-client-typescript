/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";
import { SecurityMonitoringDatasetUpdateAttributesRequest } from "./SecurityMonitoringDatasetUpdateAttributesRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating a security monitoring dataset.
 */
export class SecurityMonitoringDatasetUpdateDataRequest {
  /**
   * Attributes for updating a security monitoring dataset.
   */
  "attributes": SecurityMonitoringDatasetUpdateAttributesRequest;
  /**
   * Type for security monitoring dataset objects.
   */
  "type": SecurityMonitoringDatasetType;

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
      type: "SecurityMonitoringDatasetUpdateAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetType",
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
    return SecurityMonitoringDatasetUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
