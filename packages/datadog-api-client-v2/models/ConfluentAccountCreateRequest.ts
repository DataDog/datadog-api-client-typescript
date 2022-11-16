/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountCreateRequestData } from "./ConfluentAccountCreateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Payload schema when adding a Confluent account.
 */
export class ConfluentAccountCreateRequest {
  /**
   * The data body for adding a Confluent account.
   */
  "data": ConfluentAccountCreateRequestData;

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
      type: "ConfluentAccountCreateRequestData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
