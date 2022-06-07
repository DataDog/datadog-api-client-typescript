/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceResponseData } from "./OpsgenieServiceResponseData";

import { AttributeTypeMap } from "../util";

/**
 * Response of an Opsgenie service.
 */
export class OpsgenieServiceResponse {
  /**
   * Opsgenie service data from a response.
   */
  "data": OpsgenieServiceResponseData;

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
      type: "OpsgenieServiceResponseData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpsgenieServiceResponse.attributeTypeMap;
  }

  public constructor() {}
}
