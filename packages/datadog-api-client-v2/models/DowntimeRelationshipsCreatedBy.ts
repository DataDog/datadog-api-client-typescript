/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeRelationshipsCreatedByData } from "./DowntimeRelationshipsCreatedByData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The user who created the downtime.
 */
export class DowntimeRelationshipsCreatedBy {
  /**
   * Data for the user who created the downtime.
   */
  "data"?: DowntimeRelationshipsCreatedByData;

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
      type: "DowntimeRelationshipsCreatedByData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeRelationshipsCreatedBy.attributeTypeMap;
  }

  public constructor() {}
}
