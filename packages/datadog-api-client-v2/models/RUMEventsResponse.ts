/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEvent } from "./RUMEvent";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object with all events matching the request and pagination information.
 */
export class RUMEventsResponse {
  /**
   * Array of events matching the request.
   */
  "data"?: Array<RUMEvent>;
  /**
   * Links attributes.
   */
  "links"?: RUMResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: RUMResponseMetadata;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<RUMEvent>",
    },
    links: {
      type: "RUMResponseLinks",
    },
    meta: {
      type: "RUMResponseMetadata",
    },
  };
}
