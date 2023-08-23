/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountType } from "./ConfluentAccountType";
import { ConfluentAccountUpdateRequestAttributes } from "./ConfluentAccountUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a Confluent account.
 */
export class ConfluentAccountUpdateRequestData {
  /**
   * Attributes object for updating a Confluent account.
   */
  "attributes": ConfluentAccountUpdateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `confluent-cloud-accounts`.
   */
  "type": ConfluentAccountType;

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
      type: "ConfluentAccountUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfluentAccountType",
      required: true,
    },
  };
}
