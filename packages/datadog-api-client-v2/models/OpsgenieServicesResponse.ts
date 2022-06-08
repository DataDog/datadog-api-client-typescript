/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceResponseData } from "./OpsgenieServiceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of Opsgenie services.
 */
export class OpsgenieServicesResponse {
  /**
   * An array of Opsgenie services.
   */
  "data": Array<OpsgenieServiceResponseData>;

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
      type: "Array<OpsgenieServiceResponseData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpsgenieServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
