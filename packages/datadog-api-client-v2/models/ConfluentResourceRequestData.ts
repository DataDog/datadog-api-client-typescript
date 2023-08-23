/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentResourceRequestAttributes } from "./ConfluentResourceRequestAttributes";
import { ConfluentResourceType } from "./ConfluentResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API request for updating a Confluent resource.
 */
export class ConfluentResourceRequestData {
  /**
   * Attributes object for updating a Confluent resource.
   */
  "attributes": ConfluentResourceRequestAttributes;
  /**
   * The ID associated with a Confluent resource.
   */
  "id": string;
  /**
   * The JSON:API type for this request.
   */
  "type": ConfluentResourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "ConfluentResourceRequestAttributes",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "ConfluentResourceType",
      required: true,
    },
  };
}
