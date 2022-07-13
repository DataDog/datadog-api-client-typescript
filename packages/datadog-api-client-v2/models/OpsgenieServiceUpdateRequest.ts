/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceUpdateData } from "./OpsgenieServiceUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update request for an Opsgenie service.
 */
export class OpsgenieServiceUpdateRequest {
  /**
   * Opsgenie service for an update request.
   */
  "data": OpsgenieServiceUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "OpsgenieServiceUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpsgenieServiceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
