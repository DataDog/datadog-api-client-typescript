/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentResourceResponseData } from "./ConfluentResourceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response schema when interacting with a Confluent resource.
 */
export class ConfluentResourceResponse {
  /**
   * Confluent Cloud resource data.
   */
  "data"?: ConfluentResourceResponseData;

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
      type: "ConfluentResourceResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentResourceResponse.attributeTypeMap;
  }

  public constructor() {}
}
