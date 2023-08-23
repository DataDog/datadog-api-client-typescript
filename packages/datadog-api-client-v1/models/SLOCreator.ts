/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The creator of the SLO
 */
export class SLOCreator {
  /**
   * Email of the creator.
   */
  "email"?: string;
  /**
   * User ID of the creator.
   */
  "id"?: number;
  /**
   * Name of the creator.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      type: "string",
    },
    id: {
      type: "number",
      format: "int64",
    },
    name: {
      type: "string",
    },
  };
}
