/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAttributes } from "./SpansAttributes";
import { SpansType } from "./SpansType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object description of a spans after being processed and stored by Datadog.
 */
export class Span {
  /**
   * JSON object containing all span attributes and their associated values.
   */
  "attributes"?: SpansAttributes;
  /**
   * Unique ID of the Span.
   */
  "id"?: string;
  /**
   * Type of the span.
   */
  "type"?: SpansType;

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
      type: "SpansAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SpansType",
    },
  };
}
