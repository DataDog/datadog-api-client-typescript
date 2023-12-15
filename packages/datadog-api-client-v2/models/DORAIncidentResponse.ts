/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAIncidentResponseData } from "./DORAIncidentResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response after receiving a DORA incident event.
 */
export class DORAIncidentResponse {
  /**
   * Response after receiving a DORA incident event.
   */
  "data": DORAIncidentResponseData;

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
      type: "DORAIncidentResponseData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAIncidentResponse.attributeTypeMap;
  }

  public constructor() {}
}
