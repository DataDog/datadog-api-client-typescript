/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";
import { ConfluentResourceType } from "./ConfluentResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Confluent Cloud resource data.
 */
export class ConfluentResourceResponseData {
  /**
   * Model representation of a Confluent Cloud resource.
   */
  "attributes": ConfluentResourceResponseAttributes;
  /**
   * The ID associated with the Confluent resource.
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
      type: "ConfluentResourceResponseAttributes",
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
