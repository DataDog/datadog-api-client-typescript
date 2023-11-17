/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAIncidentType } from "./DORAIncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response after receiving a DORA incident event.
 */
export class DORAIncidentResponseData {
  /**
   * The ID of the received DORA incident event.
   */
  "id": string;
  /**
   * JSON:API type for DORA incident events.
   */
  "type"?: DORAIncidentType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORAIncidentType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAIncidentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
