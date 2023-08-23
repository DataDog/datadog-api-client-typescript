/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountUpdateRequestData } from "./ConfluentAccountUpdateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API request for updating a Confluent account.
 */
export class ConfluentAccountUpdateRequest {
  /**
   * Data object for updating a Confluent account.
   */
  "data": ConfluentAccountUpdateRequestData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "ConfluentAccountUpdateRequestData",
      required: true,
    },
  };
}
