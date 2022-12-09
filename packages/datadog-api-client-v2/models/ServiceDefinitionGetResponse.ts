/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionData } from "./ServiceDefinitionData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Get service definition response.
 */
export class ServiceDefinitionGetResponse {
  /**
   * Service definition data.
   */
  "data"?: ServiceDefinitionData;

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
      type: "ServiceDefinitionData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
