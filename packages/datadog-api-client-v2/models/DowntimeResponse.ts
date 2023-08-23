/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeResponseData } from "./DowntimeResponseData";
import { DowntimeResponseIncludedItem } from "./DowntimeResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Downtiming gives you greater control over monitor notifications by
 * allowing you to globally exclude scopes from alerting.
 * Downtime settings, which can be scheduled with start and end times,
 * prevent all alerting related to specified Datadog tags.
 */
export class DowntimeResponse {
  /**
   * Downtime data.
   */
  "data"?: DowntimeResponseData;
  /**
   * Array of objects related to the downtime that the user requested.
   */
  "included"?: Array<DowntimeResponseIncludedItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "DowntimeResponseData",
    },
    included: {
      type: "Array<DowntimeResponseIncludedItem>",
    },
  };
}
