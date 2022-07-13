/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostMapRequest } from "./HostMapRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of definitions.
 */
export class HostMapWidgetDefinitionRequests {
  /**
   * Updated host map.
   */
  "fill"?: HostMapRequest;
  /**
   * Updated host map.
   */
  "size"?: HostMapRequest;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fill: {
      baseName: "fill",
      type: "HostMapRequest",
    },
    size: {
      baseName: "size",
      type: "HostMapRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMapWidgetDefinitionRequests.attributeTypeMap;
  }

  public constructor() {}
}
