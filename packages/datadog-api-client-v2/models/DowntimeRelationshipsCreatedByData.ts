/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsersType } from "./UsersType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for the user who created the downtime.
 */
export class DowntimeRelationshipsCreatedByData {
  /**
   * User ID of the downtime creator.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type"?: UsersType;

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
    },
    type: {
      baseName: "type",
      type: "UsersType",
    },
  };
}
