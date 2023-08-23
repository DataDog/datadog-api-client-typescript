/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyResponseIncludedItem } from "./APIKeyResponseIncludedItem";
import { PartialAPIKey } from "./PartialAPIKey";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a list of API keys.
 */
export class APIKeysResponse {
  /**
   * Array of API keys.
   */
  "data"?: Array<PartialAPIKey>;
  /**
   * Array of objects related to the API key.
   */
  "included"?: Array<APIKeyResponseIncludedItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<PartialAPIKey>",
    },
    included: {
      type: "Array<APIKeyResponseIncludedItem>",
    },
  };
}
