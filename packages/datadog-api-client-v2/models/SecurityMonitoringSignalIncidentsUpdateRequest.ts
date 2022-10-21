/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalIncidentsUpdateData } from "./SecurityMonitoringSignalIncidentsUpdateData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for changing the related incidents of a given security monitoring signal.
 */
export class SecurityMonitoringSignalIncidentsUpdateRequest {
  /**
   * Data containing the patch for changing the related incidents of a signal.
   */
  "data": SecurityMonitoringSignalIncidentsUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "SecurityMonitoringSignalIncidentsUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalIncidentsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
