/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeCreateRequestData } from "./DowntimeCreateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request for creating a downtime.
 */
export class DowntimeCreateRequest {
  /**
   * Object to create a downtime.
   */
  "data": DowntimeCreateRequestData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "DowntimeCreateRequestData",
      required: true,
    },
  };
}
