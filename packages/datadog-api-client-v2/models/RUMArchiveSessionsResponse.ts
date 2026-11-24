/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMArchiveSession } from "./RUMArchiveSession";
import { RUMArchiveSessionsMeta } from "./RUMArchiveSessionsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API document.
 */
export class RUMArchiveSessionsResponse {
  /**
   * Archived sessions.
   */
  "data": Array<RUMArchiveSession>;
  /**
   * Search metadata.
   */
  "meta": RUMArchiveSessionsMeta;

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
      type: "Array<RUMArchiveSession>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMArchiveSessionsMeta",
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
    return RUMArchiveSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
