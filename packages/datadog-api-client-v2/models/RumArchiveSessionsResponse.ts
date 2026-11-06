/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumArchiveSession } from "./RumArchiveSession";
import { RumArchiveSessionsMeta } from "./RumArchiveSessionsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API document.
 */
export class RumArchiveSessionsResponse {
  /**
   * Archived sessions.
   */
  "data": Array<RumArchiveSession>;
  /**
   * Search metadata.
   */
  "meta": RumArchiveSessionsMeta;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<RumArchiveSession>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumArchiveSessionsMeta",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumArchiveSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
