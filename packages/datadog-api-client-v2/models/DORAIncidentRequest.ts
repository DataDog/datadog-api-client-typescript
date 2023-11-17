/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAIncidentRequestData } from "./DORAIncidentRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create a DORA incident event.
 */
export class DORAIncidentRequest {
  /**
   * The JSON:API data.
   */
  "data": DORAIncidentRequestData;

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
      type: "DORAIncidentRequestData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
