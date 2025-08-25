/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorSearchCountItem } from "./MonitorSearchCountItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The counts of monitors per different criteria.
 */
export class MonitorSearchResponseCounts {
  /**
   * Search facets.
   */
  "muted"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "status"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "tag"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "type"?: Array<MonitorSearchCountItem>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    muted: {
      baseName: "muted",
      type: "Array<MonitorSearchCountItem>",
    },
    status: {
      baseName: "status",
      type: "Array<MonitorSearchCountItem>",
    },
    tag: {
      baseName: "tag",
      type: "Array<MonitorSearchCountItem>",
    },
    type: {
      baseName: "type",
      type: "Array<MonitorSearchCountItem>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorSearchResponseCounts.attributeTypeMap;
  }

  public constructor() {}
}
