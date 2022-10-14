/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentResourceResponseData } from "./ConfluentResourceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response schema when interacting with a list of Confluent resources.
 */
export class ConfluentResourcesResponse {
  /**
   * The JSON:API data attribute.
   */
  "data"?: Array<ConfluentResourceResponseData>;

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
      type: "Array<ConfluentResourceResponseData>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentResourcesResponse.attributeTypeMap;
  }

  public constructor() {}
}
