/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalStateUpdateData } from "./SecurityMonitoringSignalStateUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for changing the state of a given security monitoring signal.
 */
export class SecurityMonitoringSignalStateUpdateRequest {
  /**
   * Data containing the patch for changing the state of a signal.
   */
  "data": SecurityMonitoringSignalStateUpdateData;

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
      type: "SecurityMonitoringSignalStateUpdateData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalStateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
