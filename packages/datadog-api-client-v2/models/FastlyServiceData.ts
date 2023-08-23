/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyServiceAttributes } from "./FastlyServiceAttributes";
import { FastlyServiceType } from "./FastlyServiceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for Fastly service requests.
 */
export class FastlyServiceData {
  /**
   * Attributes object for Fastly service requests.
   */
  "attributes"?: FastlyServiceAttributes;
  /**
   * The ID of the Fastly service.
   */
  "id": string;
  /**
   * The JSON:API type for this API. Should always be `fastly-services`.
   */
  "type": FastlyServiceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "FastlyServiceAttributes",
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "FastlyServiceType",
      required: true,
    },
  };
}
