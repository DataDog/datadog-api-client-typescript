/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeAttributeResponse } from "./DowntimeAttributeResponse";
import { DowntimeRelationships } from "./DowntimeRelationships";
import { DowntimeResourceType } from "./DowntimeResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Downtime data.
 */
export class DowntimeResponseData {
  /**
   * Downtime details.
   */
  "attributes"?: DowntimeAttributeResponse;
  /**
   * The downtime ID.
   */
  "id"?: string;
  /**
   * All relationships associated with downtime.
   */
  "relationships"?: DowntimeRelationships;
  /**
   * Downtime resource type.
   */
  "type"?: DowntimeResourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "DowntimeAttributeResponse",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "DowntimeRelationships",
    },
    type: {
      baseName: "type",
      type: "DowntimeResourceType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeResponseData.attributeTypeMap;
  }

  public constructor() {}
}
